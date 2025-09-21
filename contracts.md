# Pure France Clone - Backend Integration Contracts

## API Contracts

### 1. Properties API
- **GET /api/properties** - Get all properties with filters
  - Query params: `region`, `guests`, `checkin`, `checkout`, `priceMin`, `priceMax`
  - Response: Array of property objects

- **GET /api/properties/:id** - Get single property details
  - Response: Full property object with amenities, images, availability

- **POST /api/properties** - Create new property (admin/owner)
  - Body: Property data with images, amenities, location

### 2. Destinations/Regions API
- **GET /api/destinations** - Get all French regions
  - Response: Array of destination objects with property counts

### 3. Blog/Content API
- **GET /api/blog** - Get blog posts
  - Query params: `category`, `limit`, `offset`
  - Response: Array of blog post objects

- **GET /api/blog/:id** - Get single blog post
  - Response: Full blog post with content

### 4. Search & Booking API
- **POST /api/search** - Advanced property search
  - Body: Search criteria (dates, guests, location, amenities)
  - Response: Filtered properties with availability

- **POST /api/bookings** - Create booking request
  - Body: Property ID, dates, guest details, contact info
  - Response: Booking confirmation with reference

- **GET /api/bookings/:id** - Get booking status
  - Response: Booking details and status

### 5. User Management API
- **POST /api/auth/register** - User registration
- **POST /api/auth/login** - User login
- **GET /api/auth/profile** - Get user profile
- **PUT /api/auth/profile** - Update user profile
- **POST /api/shortlist** - Add/remove from shortlist
- **GET /api/shortlist** - Get user's shortlisted properties

## Current Mock Data to Replace

### Frontend Mock Files:
- `/app/frontend/src/data/mockData.js`
  - `mockDestinations` → Replace with API call to /api/destinations
  - `mockProperties` → Replace with API call to /api/properties
  - `mockBlogPosts` → Replace with API call to /api/blog

### Mock Data Integration Points:
1. **HomePage.jsx** - Regional showcase, property search
2. **DestinationsPage.jsx** - All destinations data
3. **BlogPage.jsx** - All blog content
4. **PropertyDetailsPage.jsx** - Individual property data
5. **Header.jsx** - User authentication status, shortlist count

## Backend Implementation Plan

### 1. Database Models (MongoDB)
- **Property Model**: name, location, price, bedrooms, bathrooms, guests, amenities, images, description, availability
- **User Model**: email, password, profile, shortlist, bookings
- **Booking Model**: property, user, dates, guests, status, totalPrice
- **Region Model**: name, description, propertyCount, featured image
- **BlogPost Model**: title, content, author, date, category, image, excerpt

### 2. Backend Features to Implement
- Property CRUD operations
- Advanced search with filters (date availability, price range, amenities)
- User authentication (JWT)
- Booking system with date validation
- Image upload for properties
- Admin panel for property/content management
- Email notifications for bookings
- Shortlist functionality

### 3. Frontend Integration Points
- Replace mock data imports with axios API calls
- Add loading states and error handling
- Implement user authentication context
- Add booking forms and confirmation flows
- Integrate search functionality with backend filters
- Add admin panels for property owners

## Integration Steps
1. Create MongoDB models and basic CRUD endpoints
2. Replace mockDestinations with real API in RegionalShowcase component
3. Replace mockProperties with search API in HomePage and property pages
4. Replace mockBlogPosts with blog API in Blog components
5. Add user authentication system
6. Implement booking functionality
7. Add shortlist feature
8. Add property management for owners

## Environment Variables Needed
- JWT_SECRET for authentication
- EMAIL_SERVICE credentials for booking notifications
- IMAGE_UPLOAD_PATH for property images
- ADMIN_EMAIL for notifications

This contracts file will guide the seamless integration of frontend with backend APIs while maintaining the current UI/UX design.