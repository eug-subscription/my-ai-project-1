// Application constants
export const APP_NAME = 'AI Food Photo Enhancer'
export const APP_DESCRIPTION = 'Transform your food photos with AI-powered enhancement'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

// File upload constants
export const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic']
export const ACCEPTED_IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.heic']

// Storage buckets
export const STORAGE_BUCKETS = {
  ORIGINAL_IMAGES: 'original-images',
  ENHANCED_IMAGES: 'enhanced-images',
  THUMBNAILS: 'thumbnails',
} as const

// API endpoints
export const API_ENDPOINTS = {
  ENHANCE_IMAGE: '/api/enhance',
  UPLOAD_IMAGE: '/api/upload',
  GALLERY: '/api/gallery',
  USER_PROFILE: '/api/user/profile',
} as const

// Enhancement settings
export const ENHANCEMENT_PRESETS = {
  BASIC: 'basic',
  ADVANCED: 'advanced',
  PROFESSIONAL: 'professional',
} as const

// Subscription tiers
export const SUBSCRIPTION_TIERS = {
  FREE: 'free',
  PREMIUM: 'premium',
  PROFESSIONAL: 'professional',
} as const

// Rate limiting
export const RATE_LIMITS = {
  FREE_TIER_DAILY: 5,
  PREMIUM_TIER_DAILY: 50,
  PROFESSIONAL_TIER_DAILY: 200,
} as const