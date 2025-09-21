from fastapi import APIRouter, HTTPException, Depends
from typing import List
from models.booking import Booking, BookingCreate, BookingStatus
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timedelta
import os

router = APIRouter()

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

@router.post("/", response_model=Booking)
async def create_booking(booking_data: BookingCreate):
    """Create a new booking request"""
    
    # Check if property exists
    property_doc = await db.properties.find_one({"id": booking_data.property_id})
    if not property_doc:
        raise HTTPException(status_code=404, detail="Property not found")
    
    # Validate dates
    if booking_data.checkin_date >= booking_data.checkout_date:
        raise HTTPException(status_code=400, detail="Check-out date must be after check-in date")
    
    if booking_data.checkin_date < datetime.now().date():
        raise HTTPException(status_code=400, detail="Check-in date cannot be in the past")
    
    # Check availability (simplified - in real app, would check existing bookings)
    existing_bookings = await db.bookings.find({
        "property_id": booking_data.property_id,
        "status": {"$in": [BookingStatus.CONFIRMED, BookingStatus.PENDING]},
        "$or": [
            {
                "checkin_date": {"$lte": booking_data.checkout_date},
                "checkout_date": {"$gte": booking_data.checkin_date}
            }
        ]
    }).to_list(100)
    
    if existing_bookings:
        raise HTTPException(status_code=400, detail="Property not available for selected dates")
    
    # Calculate total price (simplified calculation)
    nights = (booking_data.checkout_date - booking_data.checkin_date).days
    weekly_price = property_doc["price"]
    total_price = (weekly_price / 7) * nights
    
    booking_dict = booking_data.dict()
    booking_dict["total_price"] = total_price
    
    booking_obj = Booking(**booking_dict)
    await db.bookings.insert_one(booking_obj.dict())
    
    return booking_obj

@router.get("/{booking_id}", response_model=Booking)
async def get_booking(booking_id: str):
    """Get booking details"""
    booking = await db.bookings.find_one({"id": booking_id})
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    return Booking(**booking)

@router.put("/{booking_id}/status")
async def update_booking_status(booking_id: str, status: BookingStatus):
    """Update booking status"""
    result = await db.bookings.update_one(
        {"id": booking_id},
        {"$set": {"status": status}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Booking not found")
    
    return {"message": f"Booking status updated to {status}"}

@router.get("/property/{property_id}", response_model=List[Booking])
async def get_property_bookings(property_id: str):
    """Get all bookings for a specific property"""
    bookings = await db.bookings.find({"property_id": property_id}).to_list(100)
    return [Booking(**booking) for booking in bookings]