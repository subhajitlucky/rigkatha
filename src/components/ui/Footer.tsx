const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-50 to-orange-50 border-t-2 border-amber-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold text-amber-900 mb-3">ऋग्कथा • RigKatha</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Ancient Rig Veda wisdom brought to life through beautiful comic storytelling. 
              Made for curious minds of all ages.
            </p>
          </div>

          {/* Column 2: Sources & Attribution */}
          <div>
            <h3 className="text-lg font-semibold text-amber-900 mb-3">Sources</h3>
            <ul className="text-sm text-amber-800 space-y-2">
              <li>
                <a 
                  href="https://vedaweb.uni-koeln.de/rigveda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 underline"
                >
                  VedaWeb (University of Cologne)
                </a>
              </li>
              <li>
                <a 
                  href="https://sacred-texts.com/hin/rigveda/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 underline"
                >
                  Sacred-Texts.com
                </a>
              </li>
              <li>
                <a 
                  href="https://sa.wikisource.org/wiki/ऋग्वेदः" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 underline"
                >
                  Wikisource Rig Veda
                </a>
              </li>
              <li className="text-xs mt-2">
                Translation: Griffith (1896) - Public Domain
              </li>
            </ul>
          </div>

          {/* Column 3: Privacy & Links */}
          <div>
            <h3 className="text-lg font-semibold text-amber-900 mb-3">Information</h3>
            <ul className="text-sm text-amber-800 space-y-2">
              <li className="flex items-center space-x-2">
                <span>🔒</span>
                <span className="font-medium">Zero data collection</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🆓</span>
                <span>No login required</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📖</span>
                <span>Open source content</span>
              </li>
              <li className="mt-4">
                <a 
                  href="https://github.com/subhajitlucky/rigkatha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-amber-900 hover:text-amber-600 font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View on GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-300 pt-6">
          
          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            {/* Mission Statement */}
            <div className="text-sm text-amber-800 text-center sm:text-left">
              <p className="font-medium">
                Made with ❤️ to make ancient wisdom accessible to all
              </p>
              <p className="text-xs mt-1">
                Rig Veda Samhita (Mandalas 1-10) • Free Forever
              </p>
            </div>

            {/* Copyright */}
            <div className="text-sm text-amber-700 text-center sm:text-right">
              <p>© 2025 RigKatha</p>
              <p className="text-xs">Educational & Non-Commercial Use</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
