"""
Seed data script to populate the database with initial data
"""
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from models.property import Property, PropertyLocation, PropertyFeatures
from models.destination import Destination
from models.blog import BlogPost
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
from datetime import datetime

async def seed_database():
    # MongoDB connection
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    
    # Clear existing data
    await db.properties.delete_many({})
    await db.destinations.delete_many({})
    await db.blog_posts.delete_many({})
    
    # Seed Properties
    properties = [
        Property(
            name="Villa Rosalie",
            location=PropertyLocation(region="Provence", city="Saint-Tropez"),
            price=2450.00,
            bedrooms=4,
            bathrooms=3,
            guests=8,
            images=[
                "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features=PropertyFeatures(pool=True, aircon=True, garden=True, bbq=True),
            amenities=["Private Pool", "WiFi", "Air Conditioning", "Garden", "BBQ"],
            description="Beautiful Provençal villa with stunning countryside views, private pool and traditional stone architecture."
        ),
        Property(
            name="Château de Lumière",
            location=PropertyLocation(region="Loire Valley", city="Amboise"),
            price=3200.00,
            bedrooms=6,
            bathrooms=4,
            guests=12,
            images=[
                "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features=PropertyFeatures(pool=False, garden=True),
            amenities=["Historic Château", "WiFi", "Vineyard Views", "Library", "Tennis Court"],
            description="Magnificent 18th-century château in the heart of Loire Valley with vineyard views and historic charm."
        ),
        Property(
            name="Maison des Oliviers",
            location=PropertyLocation(region="Occitanie", city="Carcassonne"),
            price=1890.00,
            bedrooms=3,
            bathrooms=2,
            guests=6,
            images=[
                "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features=PropertyFeatures(pool=True, garden=True),
            amenities=["Private Pool", "WiFi", "Olive Grove", "Terrace", "Mountain Views"],
            description="Charming stone house surrounded by olive groves with stunning mountain views and private pool."
        )
    ]
    
    for property in properties:
        await db.properties.insert_one(property.dict())
    
    # Seed Destinations
    destinations = [
        Destination(
            name="Loire Valley",
            region="Central France",
            description="Famous châteaux, vineyards and royal history in the heart of France",
            image="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            features=["Châteaux", "Vineyards", "Historic Sites", "River Views"],
            property_count=89
        ),
        Destination(
            name="Provence",
            region="South of France",
            description="Lavender fields, hilltop villages and Mediterranean charm",
            image="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            features=["Lavender Fields", "Markets", "Medieval Villages", "Art Galleries"],
            property_count=156
        ),
        Destination(
            name="Dordogne",
            region="Southwest France",
            description="Prehistoric caves, medieval castles and gastronomic delights",
            image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            features=["Medieval Castles", "Caves", "River Canoeing", "Truffle Markets"],
            property_count=134
        ),
        Destination(
            name="Occitanie",
            region="Southern France",
            description="From Toulouse to the Mediterranean with Cathar castles and canals",
            image="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            features=["Cathar Castles", "Canal du Midi", "Pink City", "Wine Regions"],
            property_count=203
        )
    ]
    
    for destination in destinations:
        await db.destinations.insert_one(destination.dict())
    
    # Seed Blog Posts
    blog_posts = [
        BlogPost(
            title="10 Must-Visit Châteaux in the Loire Valley",
            excerpt="Discover the most spectacular châteaux that make the Loire Valley a UNESCO World Heritage site.",
            content="The Loire Valley is home to some of France's most magnificent châteaux...",
            author="Sarah Mitchell",
            date=datetime(2024, 1, 15),
            image="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category="Destinations"
        ),
        BlogPost(
            title="Provence Market Guide: From Lavender to Local Delicacies",
            excerpt="Your complete guide to the best markets in Provence for authentic French experiences.",
            content="Provence markets are a feast for the senses...",
            author="Jean-Pierre Dubois",
            date=datetime(2024, 1, 10),
            image="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category="Travel Tips"
        ),
        BlogPost(
            title="Family Fun in Dordogne: Activities for All Ages",
            excerpt="From prehistoric caves to river adventures, discover family-friendly activities in Dordogne.",
            content="The Dordogne region offers incredible experiences for families...",
            author="Claire Thompson",
            date=datetime(2024, 1, 5),
            image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category="Family Travel"
        )
    ]
    
    for post in blog_posts:
        await db.blog_posts.insert_one(post.dict())
    
    print("Database seeded successfully!")

if __name__ == "__main__":
    asyncio.run(seed_database())