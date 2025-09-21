from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

class User(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    first_name: str
    last_name: str
    phone: Optional[str] = None
    shortlist: List[str] = []  # Property IDs
    is_owner: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
class UserCreate(BaseModel):
    email: EmailStr
    password: str
    first_name: str
    last_name: str
    phone: Optional[str] = None
    
class UserLogin(BaseModel):
    email: EmailStr
    password: str
    
class UserProfile(BaseModel):
    first_name: str
    last_name: str
    phone: Optional[str] = None