from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class BlogPost(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    excerpt: str
    content: str
    author: str
    date: datetime = Field(default_factory=datetime.utcnow)
    image: str
    category: str
    published: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
class BlogPostCreate(BaseModel):
    title: str
    excerpt: str
    content: str
    author: str
    image: str
    category: str
    published: bool = True