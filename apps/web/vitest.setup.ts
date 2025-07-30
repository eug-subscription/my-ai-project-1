import { beforeAll, afterAll, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Set up environment variables for testing
beforeAll(() => {
  process.env.NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321'
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'test-anon-key'
  process.env.SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'test-service-key'
  process.env.NODE_ENV = 'test'
})

// Clean up after each test
afterEach(() => {
  cleanup()
})

// Global test utilities
global.ResizeObserver = global.ResizeObserver || class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}