from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class PropertyFeatures(BaseModel):
    wifi: bool = True
    parking: bool = True
    pool: bool = False
    aircon: bool = False
    garden: bool = False
    bbq: bool = False
    kitchen: bool = True
    
class PropertyLocation(BaseModel):
    region: str
    city: str
    coordinates: Optional[dict] = None
    
class Property(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    location: PropertyLocation
    price: float
    currency: str = "EUR"
    period: str = "per week"
    bedrooms: int
    bathrooms: int
    guests: int
    images: List[str]
    features: PropertyFeatures
    amenities: List[str]
    description: str
    available: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
class PropertyCreate(BaseModel):
    name: str
    location: PropertyLocation
    price: float
    bedrooms: int
    bathrooms: int
    guests: int
    images: List[str]
    features: PropertyFeatures
    amenities: List[str]
    description: str
    available: bool = True

class PropertySearch(BaseModel):
    region: Optional[str] = None
    guests: Optional[int] = None
    checkin: Optional[str] = None
    checkout: Optional[str] = None
    price_min: Optional[float] = None
    price_max: Optional[float] = None
    amenities: Optional[List[str]] = None