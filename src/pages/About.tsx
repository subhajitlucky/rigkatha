import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* Sacred geometry background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-900 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-orange-900 rotate-45"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-yellow-900 rounded-full"></div>
          </div>

          <div className="relative text-center">
            <div className="inline-block mb-6">
              <div className="text-7xl mb-4">🕉️</div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 mb-6">
              About RigKatha
            </h1>
            
            <p className="text-xl sm:text-2xl text-amber-800 max-w-3xl mx-auto font-serif leading-relaxed">
              Ancient wisdom meets modern storytelling — Discover the Rig Veda through beautiful comic-style narratives
            </p>
          </div>
        </div>
      </section>

      {/* What is RigKatha Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-amber-200">
          
          <h2 className="text-4xl font-bold text-amber-900 mb-6 text-center">
            🌟 What is RigKatha?
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
            <strong>RigKatha</strong> transforms the ancient Rig Veda into engaging visual stories. 
            We believe sacred wisdom should be accessible, delightful, and easy to understand for everyone — 
            from curious children to lifelong learners.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Comic-Style Panels</h3>
              <p className="text-gray-700">Beautiful illustrations that bring ancient tales to life</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🐠</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Diverse Characters</h3>
              <p className="text-gray-700">Fish, horses, birds, deities, and nature spirits as teachers</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Interactive Learning</h3>
              <p className="text-gray-700">Story → Lesson → Shloka → Quiz progression</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Zero Login</h3>
              <p className="text-gray-700">Instant access to wisdom, no barriers</p>
            </div>

          </div>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">
          🎭 The Experience
        </h2>

        <div className="space-y-8">
          
          {/* Story Mode */}
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-8 md:p-10 border-2 border-amber-300 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-7xl md:text-8xl">📖</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-amber-900 mb-4">Story Mode</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  Immerse yourself in beautifully illustrated tales where ancient characters come alive:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong>The Wise Fish</strong> who taught sages about adaptability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong>Indra's Horses</strong> racing across cosmic storms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong>The Patient Crocodile</strong> sharing lessons of timing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong>Sacred Birds</strong> carrying messages between worlds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Learning Flow */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-3xl p-8 md:p-10 border-2 border-amber-300 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-7xl md:text-8xl">🎓</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-amber-900 mb-4">Learning Flow</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  Each story follows a proven educational pattern:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-amber-200">
                    <div className="text-3xl">1️⃣</div>
                    <div>
                      <div className="font-bold text-amber-900">Visual Story</div>
                      <div className="text-sm text-gray-600">Engaging comic panels</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-amber-200">
                    <div className="text-3xl">2️⃣</div>
                    <div>
                      <div className="font-bold text-amber-900">Life Lesson</div>
                      <div className="text-sm text-gray-600">Practical wisdom extracted</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-amber-200">
                    <div className="text-3xl">3️⃣</div>
                    <div>
                      <div className="font-bold text-amber-900">Original Shloka</div>
                      <div className="text-sm text-gray-600">Sanskrit with translation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-amber-200">
                    <div className="text-3xl">4️⃣</div>
                    <div>
                      <div className="font-bold text-amber-900">Interactive Quiz</div>
                      <div className="text-sm text-gray-600">Test understanding</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-amber-200">
          
          <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center">
            🛠️ Technology Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">React 18 + TypeScript</h3>
              <p className="text-sm text-gray-600">Modern, type-safe development</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">TailwindCSS</h3>
              <p className="text-sm text-gray-600">Beautiful, responsive design</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Framer Motion</h3>
              <p className="text-sm text-gray-600">Smooth animations & transitions</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Vite</h3>
              <p className="text-sm text-gray-600">Lightning-fast build tool</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Vercel</h3>
              <p className="text-sm text-gray-600">Edge network deployment</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200">
              <div className="text-4xl mb-3">🔊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Web Speech API</h3>
              <p className="text-sm text-gray-600">Native voice narration</p>
            </div>

          </div>
        </div>
      </section>

      {/* Story Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">
          📖 Story Collection
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Agni Stories */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl">🔥</div>
              <div>
                <h3 className="text-2xl font-bold text-red-900">Agni Stories</h3>
                <p className="text-red-700">Fire Deity</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>The Wise Fish and Sacred Fire</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>The Three Sacred Flames</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Agni's Journey to the Gods</span>
              </li>
            </ul>
          </div>

          {/* Indra Stories */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl">⚡</div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">Indra Stories</h3>
                <p className="text-blue-700">Storm God</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Indra's Cosmic Horses</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>The Battle with Vritra</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Thunder's Teaching</span>
              </li>
            </ul>
          </div>

          {/* Varuna Stories */}
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border-2 border-cyan-200 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl">🌊</div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-900">Varuna Stories</h3>
                <p className="text-cyan-700">Water Deity</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>The Patient Crocodile's Wisdom</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Rivers that Remember</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span>Ocean's Ancient Laws</span>
              </li>
            </ul>
          </div>

          {/* Ushas Stories */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border-2 border-pink-200 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl">🌅</div>
              <div>
                <h3 className="text-2xl font-bold text-pink-900">Ushas Stories</h3>
                <p className="text-pink-700">Dawn Goddess</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>The Early Bird's Revelation</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>Dance of First Light</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>Morning's Sacred Promise</span>
              </li>
            </ul>
          </div>

        </div>

        <p className="text-center text-gray-600 mt-8 italic">
          Each story includes original Sanskrit shlokas with translations and sources.
        </p>
      </section>

      {/* Recognition & Impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl p-8 md:p-12 border-2 border-yellow-300 shadow-2xl">
          
          <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center">
            🌟 Recognition & Impact
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="text-center p-6 bg-white rounded-2xl border-2 border-yellow-300 shadow-md">
              <div className="text-5xl mb-3">🕉️</div>
              <h3 className="font-bold text-gray-900 mb-2">Sacred Mission</h3>
              <p className="text-sm text-gray-600">Built with devotion and love</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl border-2 border-yellow-300 shadow-md">
              <div className="text-5xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-gray-900 mb-2">For All Ages</h3>
              <p className="text-sm text-gray-600">Children to elders welcome</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl border-2 border-yellow-300 shadow-md">
              <div className="text-5xl mb-3">🌟</div>
              <h3 className="font-bold text-gray-900 mb-2">Innovative Approach</h3>
              <p className="text-sm text-gray-600">Comics meet ancient wisdom</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl border-2 border-yellow-300 shadow-md">
              <div className="text-5xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Accessible Learning</h3>
              <p className="text-sm text-gray-600">Free and open to everyone</p>
            </div>

          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-amber-200">
          
          <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center">
            📚 Our Educational Philosophy
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Learning Through Story */}
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-3">
                <span className="text-4xl">🎯</span>
                Learning Through Story
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <div>
                    <strong className="text-gray-900">Visual Memory</strong>
                    <p className="text-gray-600">Comics create lasting impressions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <div>
                    <strong className="text-gray-900">Character Connection</strong>
                    <p className="text-gray-600">Animals make concepts relatable</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <div>
                    <strong className="text-gray-900">Progressive Complexity</strong>
                    <p className="text-gray-600">Start simple, build understanding</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <div>
                    <strong className="text-gray-900">Cultural Context</strong>
                    <p className="text-gray-600">Respect for source material</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Pedagogical Approach */}
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-3">
                <span className="text-4xl">🧠</span>
                Pedagogical Approach
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <div>
                    <strong className="text-gray-900">Narrative Arc</strong>
                    <p className="text-gray-600">Clear beginning, middle, end</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <div>
                    <strong className="text-gray-900">Interactive Elements</strong>
                    <p className="text-gray-600">Quizzes reinforce learning</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <div>
                    <strong className="text-gray-900">Multiple Modalities</strong>
                    <p className="text-gray-600">Visual, audio, and text</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <div>
                    <strong className="text-gray-900">Self-Paced</strong>
                    <p className="text-gray-600">Learn at your own rhythm</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Attribution Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 md:p-12 border-2 border-amber-300">
          
          <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center">
            📄 Attribution & Sources
          </h2>

          <div className="space-y-6">
            
            <div className="bg-white rounded-2xl p-6 border border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <span>📚</span> Rig Veda Sources
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>All content sourced from <strong>Rig Veda Samhita</strong> (Mandalas 1-10 only)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Sanskrit Text: <a href="https://sa.wikisource.org/wiki/ऋग्वेदः" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Wikisource Rig Veda</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>English Translations: Ralph T.H. Griffith (1896), <a href="https://vedaweb.uni-koeln.de/rigveda" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">VedaWeb Project</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Every story includes Mandala.Sukta.Rik citation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <span>🎨</span> Visual Assets
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Character illustrations: AI-generated + custom artwork</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Backgrounds: Original designs inspired by Vedic imagery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Icons: Open source libraries with appropriate licenses</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-amber-900 to-orange-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Dive into ancient wisdom through beautiful storytelling. Choose your path and start exploring today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="inline-block px-8 py-4 bg-white text-amber-900 font-bold rounded-full hover:bg-amber-50 transition-colors shadow-lg text-lg"
            >
              🏠 Back to Home
            </Link>
            <Link 
              to="/browse/deity"
              className="inline-block px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition-colors shadow-lg text-lg"
            >
              📚 Start Learning
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}

export default About

