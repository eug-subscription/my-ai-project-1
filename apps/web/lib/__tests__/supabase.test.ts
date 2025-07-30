import { describe, it, expect, beforeAll } from 'vitest'
import { supabase } from '../supabase'

describe('Supabase Integration', () => {
  beforeAll(() => {
    // Ensure environment variables are set for testing
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      throw new Error('NEXT_PUBLIC_SUPABASE_URL is required for testing')
    }
    if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY is required for testing')
    }
  })

  it('should create supabase client successfully', () => {
    expect(supabase).toBeDefined()
    expect(supabase.auth).toBeDefined()
    expect(supabase.storage).toBeDefined()
  })

  it('should perform basic connection test', async () => {
    // Test basic connection with a simple query
    const { error } = await supabase
      .from('test')
      .select('*')
      .limit(1)
    
    // We expect this to fail with a relation "test" does not exist error
    // which confirms the connection is working
    expect(error).toBeDefined()
    expect(error?.message).toContain('relation "test" does not exist')
  })

  it('should handle auth service check', async () => {
    // Test auth service connectivity
    const { data, error } = await supabase.auth.getSession()
    
    // Should return no error and null session for unauthenticated user
    expect(error).toBeNull()
    expect(data.session).toBeNull()
  })

  it('should verify storage access', async () => {
    // Test storage service connectivity
    const { data, error } = await supabase.storage.listBuckets()
    
    // Should return either buckets or an empty array without error
    expect(error).toBeNull()
    expect(Array.isArray(data)).toBe(true)
  })
})