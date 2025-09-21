from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime, date
import uuid
from enum import Enum

class BookingStatus(str, Enum):
    PENDING = "pending"
    CONFIRMED = "confirmed"
    CANCELLED = "cancelled"
    COMPLETED = "completed"

class Booking(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    property_id: str
    user_id: Optional[str] = None  # Optional for guest bookings
    guest_name: str
    guest_email: EmailStr
    guest_phone: str
    checkin_date: date
    checkout_date: date
    guests: int
    total_price: float
    currency: str = "EUR"
    status: BookingStatus = BookingStatus.PENDING
    special_requests: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
class BookingCreate(BaseModel):
    property_id: str
    guest_name: str
    guest_email: EmailStr
    guest_phone: str
    checkin_date: date
    checkout_date: date
    guests: int
    special_requests: Optional[str] = None