from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import registration, payment, seats

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Tronix365 API")

from fastapi.middleware.trustedhost import TrustedHostMiddleware
import os

# Security: Trusted Host Middleware
# In production, set ALLOWED_HOSTS to your domain (e.g., "tronix365.com")
allowed_hosts = os.getenv("ALLOWED_HOSTS", "*").split(",")
app.add_middleware(
    TrustedHostMiddleware, 
    allowed_hosts=allowed_hosts
)

# Security: CORS
# In production, set ALLOWED_ORIGINS to your frontend domain
allowed_origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173,http://localhost:5174,http://localhost:3000,https://tronix365.in,https://www.tronix365.in").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"], # Restrict methods
    allow_headers=["*"],
)

app.include_router(registration.router, prefix="/api", tags=["Registration"])
app.include_router(payment.router, prefix="/api/payment", tags=["Payment"])
app.include_router(seats.router, prefix="/api/seats", tags=["Seats"])

@app.get("/api/health")
def health_check():
    return {"status": "ok"}
