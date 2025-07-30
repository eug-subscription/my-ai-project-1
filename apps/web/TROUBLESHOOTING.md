# Troubleshooting Guide

## Common Issues and Solutions

### Environment Variables

**Issue**: `Invalid environment variables` error
**Solution**: 
1. Ensure `.env.local` exists and contains all required variables
2. Copy from `.env.example`: `cp .env.example .env.local`
3. Fill in actual values for Supabase configuration

**Issue**: Environment variables not loading
**Solution**:
1. Restart development server after changing `.env.local`
2. Ensure variables start with `NEXT_PUBLIC_` for client-side access
3. Check for typos in variable names

### Supabase Integration

**Issue**: `relation "test" does not exist` error in tests
**Solution**: This is expected behavior - confirms connection is working

**Issue**: Auth service not accessible
**Solution**:
1. Verify `NEXT_PUBLIC_SUPABASE_URL` is correct
2. Check `NEXT_PUBLIC_SUPABASE_ANON_KEY` is valid
3. Ensure Supabase project is active

**Issue**: Storage buckets not accessible
**Solution**:
1. Create required buckets in Supabase dashboard
2. Set proper RLS policies for bucket access
3. Verify service role key has storage permissions

### Build Issues

**Issue**: TypeScript compilation errors
**Solution**:
1. Run `pnpm --filter web exec tsc --noEmit` to check types
2. Install missing dependencies: `pnpm install`
3. Clear TypeScript cache: `rm -rf .next && pnpm build`

**Issue**: ESLint errors during build
**Solution**:
1. Run `pnpm lint` to see specific errors
2. Fix linting issues or add `// eslint-disable-next-line` for specific cases
3. Check ESLint configuration in `eslint.config.js`

**Issue**: Turborepo cache issues
**Solution**:
1. Clear Turbo cache: `pnpm clean`
2. Delete `.turbo` directory: `rm -rf .turbo`
3. Rebuild: `pnpm build`

### Development Server

**Issue**: Port 3000 already in use
**Solution**:
1. Kill existing process: `lsof -ti:3000 | xargs kill -9`
2. Use different port: `pnpm dev --port 3001`
3. Check for other Next.js applications running

**Issue**: Hot reload not working
**Solution**:
1. Restart development server
2. Clear browser cache
3. Check file watchers limit on Linux: `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf`

### Package Management

**Issue**: pnpm command not found
**Solution**:
1. Install pnpm globally: `npm install -g pnpm@10.13.1`
2. Or use npx: `npx pnpm@10.13.1 install`
3. Enable Corepack: `corepack enable`

**Issue**: Workspace dependencies not resolving
**Solution**:
1. Ensure `pnpm-workspace.yaml` exists in root
2. Run `pnpm install` from project root
3. Clear node_modules: `rm -rf node_modules && pnpm install`

### Testing Issues

**Issue**: Vitest configuration not found
**Solution**:
1. Ensure `vitest.config.ts` exists in `apps/web/`
2. Install test dependencies: `pnpm --filter web add -D vitest @testing-library/react`
3. Check test script in `package.json`

**Issue**: Tests failing due to environment
**Solution**:
1. Ensure `vitest.setup.ts` configures test environment
2. Set test environment variables in CI/CD
3. Mock external services in tests

### Deployment Issues

**Issue**: Vercel build failing
**Solution**:
1. Check build logs in Vercel dashboard
2. Ensure all environment variables are set in Vercel
3. Verify Node.js version compatibility

**Issue**: Health check endpoint returning 503
**Solution**:
1. Check `/api/health` endpoint response
2. Verify all integrations are properly configured
3. Review individual check failures in response

### Performance Issues

**Issue**: Slow initial load
**Solution**:
1. Enable Turbopack: `pnpm dev --turbopack`
2. Optimize imports and bundle size
3. Use Next.js Image component for images

**Issue**: Build times too long
**Solution**:
1. Enable Turborepo caching
2. Optimize TypeScript configuration
3. Review and minimize dependencies

## Health Check Endpoints

Use these endpoints to diagnose issues:

- `GET /api/health` - Overall system health
- Check individual services in health response

## Getting Help

1. Check this troubleshooting guide first
2. Review error logs and stack traces
3. Search existing issues in project repository
4. Create detailed issue with reproduction steps

## Environment-Specific Notes

### Development
- Use `.env.local` for local overrides
- Enable detailed error reporting
- Use development Supabase instance

### Production
- All environment variables must be set in deployment platform
- Monitor health check endpoint
- Review deployment logs for issues