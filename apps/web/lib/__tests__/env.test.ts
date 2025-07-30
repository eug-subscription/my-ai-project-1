import { describe, it, expect, beforeAll } from 'vitest'

describe('Environment Configuration', () => {
  beforeAll(() => {
    // Set required environment variables for testing
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'http://localhost:54321'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service-key'
    process.env.NODE_ENV = 'test'
  })

  it('should validate required environment variables', async () => {
    // Dynamic import to ensure env vars are set before validation
    const { env } = await import('../env')
    
    expect(env.NEXT_PUBLIC_SUPABASE_URL).toBe('http://localhost:54321')
    expect(env.NEXT_PUBLIC_SUPABASE_ANON_KEY).toBe('test-anon-key')
    expect(env.SUPABASE_SERVICE_ROLE_KEY).toBe('test-service-key')
    expect(env.NODE_ENV).toBe('test')
  })

  it('should provide environment helper functions', async () => {
    const { isDevelopment, isProduction, isTest } = await import('../env')
    
    expect(isTest).toBe(true)
    expect(isDevelopment).toBe(false)
    expect(isProduction).toBe(false)
  })

  it('should provide configuration objects', async () => {
    const { supabaseConfig, stripeConfig, sentryConfig } = await import('../env')
    
    expect(supabaseConfig.url).toBe('http://localhost:54321')
    expect(supabaseConfig.anonKey).toBe('test-anon-key')
    expect(supabaseConfig.serviceRoleKey).toBe('test-service-key')
    
    // Optional configs should be undefined in test
    expect(stripeConfig.publishableKey).toBeUndefined()
    expect(sentryConfig.dsn).toBeUndefined()
  })
})