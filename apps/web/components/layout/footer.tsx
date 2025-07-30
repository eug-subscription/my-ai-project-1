export function Footer() {
  return (
    <footer className="w-full border-t border-divider py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">AI Food Photo Enhancer</h3>
            <p className="text-sm text-gray-600">
              Transform your food photos with AI-powered enhancement technology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/enhance" className="text-gray-600 hover:text-primary">Photo Enhancement</a></li>
              <li><a href="/gallery" className="text-gray-600 hover:text-primary">Gallery</a></li>
              <li><a href="/pricing" className="text-gray-600 hover:text-primary">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="text-gray-600 hover:text-primary">Help Center</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact Us</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-600 hover:text-primary">About</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-primary">Blog</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-primary">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-divider mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2025 AI Food Photo Enhancer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}