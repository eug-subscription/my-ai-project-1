import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { env } from '@/lib/env'

export async function GET(_request: NextRequest) {
  const checks: Record<string, { status: 'ok' | 'error', message: string, timestamp: string }> = {}
  const timestamp = new Date().toISOString()
  
  // 1. Environment Variables Check
  try {
    // Check if critical env vars are accessible
    if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      throw new Error('Missing critical environment variables')
    }
    checks.environment = {
      status: 'ok',
      message: 'All required environment variables are accessible',
      timestamp
    }
  } catch (error) {
    checks.environment = {
      status: 'error',
      message: error instanceof Error ? error.message : 'Environment validation failed',
      timestamp
    }
  }

  // 2. Supabase Database Connectivity
  try {
    const { data, error } = await supabase
      .from('_health_check')
      .select('*')
      .limit(1)
    
    // This should fail with "relation does not exist" which confirms connection works
    if (error && error.message.includes('relation "_health_check" does not exist')) {
      checks.database = {
        status: 'ok',
        message: 'Database connection established successfully',
        timestamp
      }
    } else if (error) {
      throw new Error(error.message)
    } else {
      checks.database = {
        status: 'ok',
        message: 'Database connection and query successful',
        timestamp
      }
    }
  } catch (error) {
    checks.database = {
      status: 'error',
      message: error instanceof Error ? error.message : 'Database connection failed',
      timestamp
    }
  }

  // 3. Supabase Auth Service Check
  try {
    const { data, error } = await supabase.auth.getSession()
    
    if (error) {
      throw new Error(error.message)
    }
    
    checks.auth = {
      status: 'ok',
      message: 'Auth service is accessible',
      timestamp
    }
  } catch (error) {
    checks.auth = {
      status: 'error',
      message: error instanceof Error ? error.message : 'Auth service check failed',
      timestamp
    }
  }

  // 4. Supabase Storage Access Check
  try {
    const { data, error } = await supabase.storage.listBuckets()
    
    if (error) {
      throw new Error(error.message)
    }
    
    checks.storage = {
      status: 'ok',
      message: `Storage service accessible, found ${data?.length || 0} buckets`,
      timestamp
    }
  } catch (error) {
    checks.storage = {
      status: 'error',
      message: error instanceof Error ? error.message : 'Storage service check failed',
      timestamp
    }
  }

  // 5. Build and Runtime Environment Check
  try {
    const runtimeInfo = {
      nodeVersion: process.version,
      platform: process.platform,
      environment: env.NODE_ENV,
      timestamp: new Date().toISOString()
    }
    
    checks.runtime = {
      status: 'ok',
      message: `Runtime healthy - Node ${runtimeInfo.nodeVersion} on ${runtimeInfo.platform}`,
      timestamp
    }
  } catch (error) {
    checks.runtime = {
      status: 'error',
      message: error instanceof Error ? error.message : 'Runtime check failed',
      timestamp
    }
  }

  // Overall health status
  const hasErrors = Object.values(checks).some(check => check.status === 'error')
  const overallStatus = hasErrors ? 'unhealthy' : 'healthy'
  
  const response = {
    status: overallStatus,
    timestamp,
    version: '1.0.0',
    environment: env.NODE_ENV,
    checks
  }

  return NextResponse.json(response, {
    status: hasErrors ? 503 : 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  })
}