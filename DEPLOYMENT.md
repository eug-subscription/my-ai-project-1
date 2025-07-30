# Deployment Guide

## Vercel Deployment

### Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Integration**: Connect your GitHub repository to Vercel
3. **Environment Variables**: Configure all required environment variables

### Required Environment Variables

Set these in your Vercel project dashboard:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Application Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NODE_ENV=production
```

### Deployment Steps

1. **Connect Repository**:
   - Go to Vercel dashboard
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**:
   - Framework Preset: Next.js
   - Build Command: `pnpm build`
   - Output Directory: `apps/web/.next`
   - Install Command: `pnpm install`

3. **Set Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add all required environment variables
   - Set appropriate environment (Production, Preview, Development)

4. **Deploy**:
   - Push to main branch triggers automatic deployment
   - Or click "Deploy" button in Vercel dashboard

### CI/CD Pipeline

The project includes GitHub Actions workflow (`.github/workflows/ci.yml`) that:

1. **On Pull Request**:
   - Runs linting
   - Runs type checking
   - Runs tests
   - Builds application

2. **On Main Branch Push**:
   - Runs all tests
   - Auto-deploys to Vercel production

### Required GitHub Secrets

Add these secrets to your GitHub repository settings:

```env
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### Domain Configuration

1. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records as instructed

2. **SSL Certificate**:
   - Automatically provided by Vercel
   - HTTPS enforced by default

### Monitoring & Analytics

1. **Vercel Analytics**:
   - Automatically enabled for deployment insights
   - View performance metrics in dashboard

2. **Error Monitoring**:
   - Consider integrating Sentry for error tracking
   - Add SENTRY_DSN environment variable when ready

### Troubleshooting

Common deployment issues:

1. **Build Failures**:
   - Check build logs in Vercel dashboard
   - Ensure all environment variables are set
   - Verify all dependencies are in package.json

2. **Runtime Errors**:
   - Check function logs in Vercel dashboard
   - Verify Supabase configuration
   - Check CORS settings in Supabase

3. **Performance Issues**:
   - Monitor Core Web Vitals in Vercel Analytics
   - Optimize images and assets
   - Review bundle size

### Health Checks

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] Environment variables are accessible
- [ ] Supabase connection works
- [ ] Build process completes without errors
- [ ] All routes are accessible