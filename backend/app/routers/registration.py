from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from ..models.models import User, Seat
from ..schemas import UserCreate, UserResponse

router = APIRouter()

@router.post("/register", response_model=UserResponse)
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    # Check if email exists
    db_user = db.query(User).filter(User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Determine amount based on early bird availability
    seat = db.query(Seat).first()
    if not seat:
        # Initialize seats if not present
        seat = Seat()
        db.add(seat)
        db.commit()
        db.refresh(seat)
    
    amount = 10000
    if seat.early_bird_taken < seat.early_bird_seats:
        amount = 6000
    
    new_user = User(
        name=user.name,
        email=user.email,
        phone=user.phone,
        message=user.message,
        amount=amount
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return new_user
