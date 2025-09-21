from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path

# Import route modules
from routes import properties, destinations, blog, bookings

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Pure France API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Include route modules
api_router.include_router(properties.router, prefix="/properties", tags=["Properties"])
api_router.include_router(destinations.router, prefix="/destinations", tags=["Destinations"])
api_router.include_router(blog.router, prefix="/blog", tags=["Blog"])
api_router.include_router(bookings.router, prefix="/bookings", tags=["Bookings"])

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Pure France API - Holiday rentals in France", "version": "1.0.0"}

# Health check endpoint
@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "database": "connected"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
