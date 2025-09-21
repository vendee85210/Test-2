from fastapi import APIRouter, HTTPException
from typing import List
from models.destination import Destination, DestinationCreate
from database import db

router = APIRouter()

@router.get("/", response_model=List[Destination])
async def get_destinations():
    """Get all destinations"""
    destinations = await db.destinations.find().to_list(1000)
    return [Destination(**dest) for dest in destinations]

@router.get("/{destination_id}", response_model=Destination)
async def get_destination(destination_id: str):
    """Get a single destination by ID"""
    destination = await db.destinations.find_one({"id": destination_id})
    if not destination:
        raise HTTPException(status_code=404, detail="Destination not found")
    return Destination(**destination)

@router.post("/", response_model=Destination)
async def create_destination(destination_data: DestinationCreate):
    """Create a new destination"""
    # Count properties in this region
    property_count = await db.properties.count_documents({
        "location.region": {"$regex": destination_data.region, "$options": "i"}
    })
    
    destination_dict = destination_data.dict()
    destination_dict["property_count"] = property_count
    
    destination_obj = Destination(**destination_dict)
    await db.destinations.insert_one(destination_obj.dict())
    return destination_obj

@router.put("/{destination_id}", response_model=Destination)
async def update_destination(destination_id: str, destination_data: DestinationCreate):
    """Update an existing destination"""
    # Count properties in this region
    property_count = await db.properties.count_documents({
        "location.region": {"$regex": destination_data.region, "$options": "i"}
    })
    
    destination_dict = destination_data.dict()
    destination_dict["property_count"] = property_count
    
    result = await db.destinations.update_one(
        {"id": destination_id},
        {"$set": destination_dict}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Destination not found")
    
    updated_destination = await db.destinations.find_one({"id": destination_id})
    return Destination(**updated_destination)

@router.delete("/{destination_id}")
async def delete_destination(destination_id: str):
    """Delete a destination"""
    result = await db.destinations.delete_one({"id": destination_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Destination not found")
    return {"message": "Destination deleted successfully"}