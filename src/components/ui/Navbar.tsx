import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-amber-50 to-orange-50 border-b-2 border-amber-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-3xl">🕉️</div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-amber-900 group-hover:text-amber-700 transition-colors">
                ऋग्कथा
              </span>
              <span className="text-xs text-amber-700 -mt-1 hidden sm:block">
                RigKatha
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className="text-amber-900 hover:text-amber-600 font-medium transition-colors"
            >
              About
            </Link>
            <a 
              href="https://github.com/subhajitlucky/rigkatha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-900 hover:text-amber-600 font-medium transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-amber-900 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Menu icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-amber-900 hover:text-amber-600 hover:bg-amber-100 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              About
            </Link>
            <a
              href="https://github.com/subhajitlucky/rigkatha"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-amber-900 hover:text-amber-600 hover:bg-amber-100 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
