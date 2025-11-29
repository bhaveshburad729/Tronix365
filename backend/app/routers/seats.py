from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models.models import Seat
from ..schemas import SeatResponse
from fastapi.responses import StreamingResponse
import asyncio
import json

router = APIRouter()

@router.get("/available", response_model=SeatResponse)
def get_seats(db: Session = Depends(get_db)):
    seat = db.query(Seat).first()
    if not seat:
        # Initialize default
        seat = Seat(total_seats=150, available_seats=150)
        db.add(seat)
        db.commit()
        db.refresh(seat)
        
    return {
        "total_seats": seat.total_seats,
        "booked_seats": seat.booked_seats,
        "available_seats": seat.available_seats,
        "early_bird_available": seat.early_bird_seats - seat.early_bird_taken
    }

@router.get("/stream")
async def seat_stream(db: Session = Depends(get_db)):
    async def event_generator():
        while True:
            # Create a new session for each check to ensure fresh data
            # In a real production app with high load, we'd use a pub/sub system (Redis)
            # instead of polling the DB. For this scale, polling is acceptable.
            seat = db.query(Seat).first()
            if seat:
                data = {
                    "total_seats": seat.total_seats,
                    "booked_seats": seat.booked_seats,
                    "available_seats": seat.available_seats,
                    "early_bird_available": seat.early_bird_seats - seat.early_bird_taken
                }
                yield f"data: {json.dumps(data)}\n\n"
            await asyncio.sleep(2)  # Update every 2 seconds

    return StreamingResponse(event_generator(), media_type="text/event-stream")
