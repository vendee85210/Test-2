from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from models.blog import BlogPost, BlogPostCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter()

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

@router.get("/", response_model=List[BlogPost])
async def get_blog_posts(
    category: Optional[str] = Query(None),
    limit: int = Query(10, le=50),
    offset: int = Query(0)
):
    """Get all blog posts with optional filtering"""
    query = {"published": True}
    
    if category:
        query["category"] = {"$regex": category, "$options": "i"}
    
    blog_posts = await db.blog_posts.find(query).sort("date", -1).skip(offset).limit(limit).to_list(limit)
    return [BlogPost(**post) for post in blog_posts]

@router.get("/{post_id}", response_model=BlogPost)
async def get_blog_post(post_id: str):
    """Get a single blog post by ID"""
    blog_post = await db.blog_posts.find_one({"id": post_id})
    if not blog_post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return BlogPost(**blog_post)

@router.post("/", response_model=BlogPost)
async def create_blog_post(post_data: BlogPostCreate):
    """Create a new blog post"""
    blog_post = BlogPost(**post_data.dict())
    await db.blog_posts.insert_one(blog_post.dict())
    return blog_post

@router.put("/{post_id}", response_model=BlogPost)
async def update_blog_post(post_id: str, post_data: BlogPostCreate):
    """Update an existing blog post"""
    result = await db.blog_posts.update_one(
        {"id": post_id},
        {"$set": post_data.dict()}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Blog post not found")
    
    updated_post = await db.blog_posts.find_one({"id": post_id})
    return BlogPost(**updated_post)

@router.delete("/{post_id}")
async def delete_blog_post(post_id: str):
    """Delete a blog post"""
    result = await db.blog_posts.delete_one({"id": post_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return {"message": "Blog post deleted successfully"}

@router.get("/categories/", response_model=List[str])
async def get_blog_categories():
    """Get all unique blog categories"""
    categories = await db.blog_posts.distinct("category", {"published": True})
    return categories