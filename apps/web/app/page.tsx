import { Card, CardBody, CardHeader } from '@heroui/react'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          AI Food Photo Enhancer
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Transform your food photos with AI-powered enhancement
        </p>
        
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <h2 className="text-xl font-semibold">Foundation Ready</h2>
          </CardHeader>
          <CardBody>
            <p>Project foundation has been successfully initialized with:</p>
            <ul className="text-left mt-4 space-y-2">
              <li>✅ Next.js 15.4 with TypeScript 5.8.3</li>
              <li>✅ HeroUI 2.8.2 Component Library</li>
              <li>✅ Tailwind CSS 4.1.2 with Glassmorphic Design</li>
              <li>✅ Motion.dev 12.23.11 for Animations</li>
              <li>✅ Monorepo Structure with Turborepo</li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </main>
  )
}