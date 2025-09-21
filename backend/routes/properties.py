from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from models.property import Property, PropertyCreate, PropertySearch
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter()

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

@router.get("/", response_model=List[Property])
async def get_properties(
    region: Optional[str] = Query(None),
    guests: Optional[int] = Query(None),
    price_min: Optional[float] = Query(None),
    price_max: Optional[float] = Query(None),
    limit: int = Query(20, le=100)
):
    """Get all properties with optional filters"""
    query = {"available": True}
    
    if region:
        query["location.region"] = {"$regex": region, "$options": "i"}
    if guests:
        query["guests"] = {"$gte": guests}
    if price_min is not None:
        query["price"] = {"$gte": price_min}
    if price_max is not None:
        if "price" in query:
            query["price"]["$lte"] = price_max
        else:
            query["price"] = {"$lte": price_max}
    
    properties = await db.properties.find(query).limit(limit).to_list(limit)
    return [Property(**prop) for prop in properties]

@router.get("/{property_id}", response_model=Property)
async def get_property(property_id: str):
    """Get a single property by ID"""
    property_doc = await db.properties.find_one({"id": property_id})
    if not property_doc:
        raise HTTPException(status_code=404, detail="Property not found")
    return Property(**property_doc)

@router.post("/", response_model=Property)
async def create_property(property_data: PropertyCreate):
    """Create a new property"""
    property_obj = Property(**property_data.dict())
    await db.properties.insert_one(property_obj.dict())
    return property_obj

@router.put("/{property_id}", response_model=Property)
async def update_property(property_id: str, property_data: PropertyCreate):
    """Update an existing property"""
    property_dict = property_data.dict()
    property_dict["updated_at"] = property_dict.get("updated_at", None)
    
    result = await db.properties.update_one(
        {"id": property_id},
        {"$set": property_dict}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Property not found")
    
    updated_property = await db.properties.find_one({"id": property_id})
    return Property(**updated_property)

@router.delete("/{property_id}")
async def delete_property(property_id: str):
    """Delete a property"""
    result = await db.properties.delete_one({"id": property_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Property not found")
    return {"message": "Property deleted successfully"}

@router.post("/search", response_model=List[Property])
async def search_properties(search_params: PropertySearch, limit: int = Query(20, le=100)):
    """Advanced property search"""
    query = {"available": True}
    
    if search_params.region:
        query["location.region"] = {"$regex": search_params.region, "$options": "i"}
    if search_params.guests:
        query["guests"] = {"$gte": search_params.guests}
    if search_params.price_min is not None:
        query["price"] = {"$gte": search_params.price_min}
    if search_params.price_max is not None:
        if "price" in query:
            query["price"]["$lte"] = search_params.price_max
        else:
            query["price"] = {"$lte": search_params.price_max}
    if search_params.amenities:
        query["amenities"] = {"$in": search_params.amenities}
    
    properties = await db.properties.find(query).limit(limit).to_list(limit)
    return [Property(**prop) for prop in properties]