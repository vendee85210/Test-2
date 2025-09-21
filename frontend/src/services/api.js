import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// API service functions
export const propertyService = {
  // Get all properties with optional filters
  getProperties: (filters = {}) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        params.append(key, value);
      }
    });
    return apiClient.get(`/properties?${params}`);
  },
  
  // Get single property by ID
  getProperty: (id) => apiClient.get(`/properties/${id}`),
  
  // Search properties with advanced filters
  searchProperties: (searchParams) => apiClient.post('/properties/search', searchParams),
  
  // Create new property
  createProperty: (propertyData) => apiClient.post('/properties', propertyData),
};

export const destinationService = {
  // Get all destinations
  getDestinations: () => apiClient.get('/destinations'),
  
  // Get single destination by ID
  getDestination: (id) => apiClient.get(`/destinations/${id}`),
};

export const blogService = {
  // Get blog posts with optional filters
  getBlogPosts: (filters = {}) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        params.append(key, value);
      }
    });
    return apiClient.get(`/blog?${params}`);
  },
  
  // Get single blog post by ID
  getBlogPost: (id) => apiClient.get(`/blog/${id}`),
  
  // Get blog categories
  getBlogCategories: () => apiClient.get('/blog/categories'),
};

export const bookingService = {
  // Create new booking
  createBooking: (bookingData) => apiClient.post('/bookings', bookingData),
  
  // Get booking by ID
  getBooking: (id) => apiClient.get(`/bookings/${id}`),
  
  // Update booking status
  updateBookingStatus: (id, status) => apiClient.put(`/bookings/${id}/status`, { status }),
  
  // Get bookings for a property
  getPropertyBookings: (propertyId) => apiClient.get(`/bookings/property/${propertyId}`),
};

// General API functions
export const apiService = {
  // Health check
  healthCheck: () => apiClient.get('/health'),
};

// Error handler for API calls
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    console.error('API Error:', error.response.data);
    return {
      message: error.response.data.detail || 'An error occurred',
      status: error.response.status
    };
  } else if (error.request) {
    // Request was made but no response
    console.error('Network Error:', error.request);
    return {
      message: 'Network error - please check your connection',
      status: 0
    };
  } else {
    // Something else happened
    console.error('Error:', error.message);
    return {
      message: 'An unexpected error occurred',
      status: -1
    };
  }
};

export default apiClient;