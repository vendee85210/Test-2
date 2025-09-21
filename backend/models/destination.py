from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class Destination(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    region: str
    description: str
    image: str
    features: List[str]
    property_count: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
class DestinationCreate(BaseModel):
    name: str
    region: str
    description: str
    image: str
    features: List[str]