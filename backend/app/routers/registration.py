from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from ..models.models import User, Seat, Coupon
from ..schemas import UserCreate, UserResponse

router = APIRouter()

@router.post("/register", response_model=UserResponse)
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    # Check if email exists
    db_user = db.query(User).filter(User.email == user.email).first()
    if db_user:
        if db_user.payment_status == "success":
            raise HTTPException(status_code=400, detail="Email already registered and paid")
        else:
            # If payment is pending or failed, delete the old record to allow re-registration
            db.delete(db_user)
            db.commit()
    
    # Determine amount based on early bird availability
    seat = db.query(Seat).first()
    if not seat:
        # Initialize seats if not present
        seat = Seat()
        db.add(seat)
        db.commit()
        db.refresh(seat)
    
    amount = 10000
    payment_status = "pending"
    coupon_used = False
    
    # Coupon Logic
    if user.coupon_code:
        coupon = db.query(Coupon).filter(Coupon.code == user.coupon_code, Coupon.is_used == False).first()
        if coupon:
            amount = 0
            payment_status = "success"
            coupon_used = True
            
            # Mark coupon as used
            coupon.is_used = True
            
            # Generate new coupon
            import random, string
            new_code = "TRONIX-" + ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
            new_coupon = Coupon(code=new_code)
            db.add(new_coupon)
            
            # Send admin email with new code (Background Task would be better but doing inline for simplicity here, or use BackgroundTasks if passed)
            # For now, we'll just call it synchronously or we need to add BackgroundTasks to the function signature
            from ..services.email import send_admin_coupon_email, send_confirmation_email
            try:
                send_admin_coupon_email(new_code)
            except Exception as e:
                print(f"Error sending admin email: {e}")
                
            # Update seats immediately since it's free/paid
            if seat.available_seats > 0:
                seat.booked_seats += 1
                seat.available_seats -= 1
                # Coupons don't count as early bird usually, or maybe they do? Let's assume they don't affect early bird count logic directly or just treat as normal booking
        else:
            raise HTTPException(status_code=400, detail="Invalid or expired coupon code")
    else:
        if seat.early_bird_taken < seat.early_bird_seats:
            amount = 6000
    
    new_user = User(
        name=user.name,
        email=user.email,
        phone=user.phone,
        college=user.college,
        branch=user.branch,
        year=user.year,
        message=user.message,
        amount=amount,
        payment_status=payment_status
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    if coupon_used:
        # Send confirmation email to user
        try:
            send_confirmation_email(
                to_email=new_user.email,
                name=new_user.name,
                amount=0,
                payment_id="COUPON-FREE",
                registration_date=new_user.registration_date
            )
        except Exception as e:
            print(f"Error sending user email: {e}")
    
    return new_user
