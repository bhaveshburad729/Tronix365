from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import registration, payment, seats

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Tronix365 API")

# CORS
origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:3000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(registration.router, prefix="/api", tags=["Registration"])
app.include_router(payment.router, prefix="/api/payment", tags=["Payment"])
app.include_router(seats.router, prefix="/api/seats", tags=["Seats"])

@app.get("/api/health")
def health_check():
    return {"status": "ok"}
