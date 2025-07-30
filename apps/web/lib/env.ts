import { z } from 'zod'

// Define the schema for environment variables
const envSchema = z.object({
  // Node environment
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  
  // Application URLs
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  
  // Supabase configuration
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  
  // Stripe configuration (optional for now)
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),
  
  // Sentry configuration (optional)
  NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
  SENTRY_ORG: z.string().optional(),
  SENTRY_PROJECT: z.string().optional(),
})

// Parse and validate environment variables
function validateEnv() {
  try {
    const env = envSchema.parse(process.env)
    return env
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map(err => err.path.join('.')).join(', ')
      throw new Error(`Invalid environment variables: ${missingVars}`)
    }
    throw error
  }
}

// Export validated environment variables
export const env = validateEnv()

// Type-safe environment variable access
export type Env = z.infer<typeof envSchema>

// Helper functions for environment checks
export const isDevelopment = env.NODE_ENV === 'development'
export const isProduction = env.NODE_ENV === 'production'
export const isTest = env.NODE_ENV === 'test'

// Configuration objects
export const supabaseConfig = {
  url: env.NEXT_PUBLIC_SUPABASE_URL,
  anonKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  serviceRoleKey: env.SUPABASE_SERVICE_ROLE_KEY,
} as const

export const stripeConfig = {
  publishableKey: env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  secretKey: env.STRIPE_SECRET_KEY,
  webhookSecret: env.STRIPE_WEBHOOK_SECRET,
} as const

export const sentryConfig = {
  dsn: env.NEXT_PUBLIC_SENTRY_DSN,
  org: env.SENTRY_ORG,
  project: env.SENTRY_PROJECT,
} as const