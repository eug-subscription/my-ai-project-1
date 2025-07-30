# AI Food Photo Enhancer

Transform your food photos with AI-powered enhancement technology.

## 🚀 Quick Start

### Prerequisites

- Node.js 22.17.1 or later
- pnpm 10.13.1 or later
- Supabase project (for database and storage)

### Environment Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp apps/web/.env.example apps/web/.env.local
   ```

4. Update the environment variables in `apps/web/.env.local`:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

5. Start the development server:
   ```bash
   pnpm dev
   ```

The application will be available at `http://localhost:3000`.

## 🏗️ Project Structure

```
/
├── apps/
│   └── web/                # Main Next.js application
│       ├── app/            # App Router pages
│       ├── components/     # UI components
│       ├── lib/            # Utilities and clients
│       └── ...
├── packages/
│   ├── ui/                 # Shared UI components
│   ├── eslint-config/      # Shared ESLint configuration
│   └── tsconfig/           # Shared TypeScript configuration
└── docs/                   # Project documentation
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4 with App Router
- **Language**: TypeScript 5.8.3
- **UI Library**: HeroUI 2.8.2
- **Styling**: Tailwind CSS 4.1.2
- **Animation**: Motion.dev 12.23.11
- **Backend**: Supabase 2.53.0
- **Image Processing**: Sharp.js 0.34.3
- **Validation**: Zod 4.0.14
- **Testing**: Vitest 3.2.4
- **Build Tool**: Turborepo

## 📦 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm test` - Run tests
- `pnpm lint` - Run ESLint
- `pnpm clean` - Clean build artifacts

## 🔧 Development

### Running Tests

```bash
pnpm test
```

### Linting

```bash
pnpm lint
```

### Building

```bash
pnpm build
```

## 🚀 Deployment

The application is configured for deployment on Vercel:

1. Connect your repository to Vercel
2. Configure environment variables in the Vercel dashboard
3. Deploy automatically on push to main branch

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key | Yes |
| `NEXT_PUBLIC_APP_URL` | Your application URL | No |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is private and proprietary.