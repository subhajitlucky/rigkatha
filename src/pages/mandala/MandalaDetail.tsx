import { useParams, Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import mandalasData from '../../data/mandalas.json'
import HymnCard from '../../components/ui/HymnCard'

// Import hymn data
import mandala1Hymns from '../../data/mandalas/mandala-1/hymns.json'

// Map of all mandala hymns
const mandalaHymnsMap: Record<number, any[]> = {
  1: mandala1Hymns,
  // 2-10: Add as src/data/mandalas/mandala-{n}/hymns.json
}

const MandalaDetail = () => {
  const { mandalaNumber } = useParams<{ mandalaNumber: string }>()
  const mandalaNum = parseInt(mandalaNumber || '1')
  
  // Get mandala metadata
  const mandala = mandalasData.find(m => m.number === mandalaNum)
  
  // Get hymns for this mandala
  const hymns = mandalaHymnsMap[mandalaNum] || []
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('')
  
  // Filter hymns based on search
  const filteredHymns = useMemo(() => {
    if (!searchQuery.trim()) return hymns
    
    const query = searchQuery.toLowerCase()
    return hymns.filter(hymn => 
      hymn.title.toLowerCase().includes(query) ||
      hymn.titleEnglish.toLowerCase().includes(query) ||
      hymn.deity.toLowerCase().includes(query) ||
      hymn.theme.toLowerCase().includes(query)
    )
  }, [hymns, searchQuery])
  
  if (!mandala) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Mandala Not Found</h1>
          <Link to="/browse/mandala" className="text-amber-600 hover:underline">
            ← Back to All Mandalas
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${mandala.color} border-b-2 border-amber-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link 
              to="/browse/mandala" 
              className="text-amber-700 hover:text-amber-900 font-medium flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Mandalas
            </Link>
          </div>

          {/* Mandala Header */}
          <div className="text-center">
            <div className="text-7xl font-bold text-amber-900 mb-4">
              {mandala.number}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-3">
              {mandala.name}
            </h1>
            <p className="text-2xl text-amber-800 mb-4 font-serif">
              {mandala.nameEnglish}
            </p>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto leading-relaxed">
              {mandala.description}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-amber-200">
              <div className="text-3xl font-bold text-amber-900">{mandala.hymnCount}</div>
              <div className="text-sm text-amber-700">Hymns (Suktas)</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-amber-200">
              <div className="text-3xl font-bold text-amber-900">{mandala.verseCount}</div>
              <div className="text-sm text-amber-700">Verses (Riks)</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-amber-200">
              <div className="text-3xl font-bold text-amber-900">{mandala.primaryDeities.length}</div>
              <div className="text-sm text-amber-700">Primary Deities</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-amber-200">
              <div className="text-3xl font-bold text-amber-900">📜</div>
              <div className="text-sm text-amber-700">{mandala.character}</div>
            </div>
          </div>

          {/* Special Features */}
          {mandala.specialFeatures && (
            <div className="mt-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-amber-200 to-orange-200 rounded-xl p-4 border-2 border-amber-300">
                <div className="text-center">
                  <span className="text-2xl mr-2">✨</span>
                  <span className="text-amber-900 font-semibold">{mandala.specialFeatures}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Search and Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
          
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search hymns by deity, theme, or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-amber-300 focus:border-amber-500 focus:outline-none text-gray-900 placeholder-amber-600"
              />
              <svg 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Info Message */}
          <div className="flex items-start gap-3 bg-amber-50 rounded-xl p-4 border border-amber-200">
            <div className="text-2xl">🙏</div>
            <div className="flex-1">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Sacred Order Preserved:</strong> All {mandala.hymnCount} hymns are shown in their traditional sequential order as they appear in the {mandala.name}. 
                Click any hymn to read verses, listen to authentic Vedic chanting, and explore deeper meanings.
              </p>
            </div>
          </div>

          {/* Results Count */}
          {searchQuery && (
            <div className="mt-4 text-center">
              <span className="text-amber-700 font-semibold">
                Showing {filteredHymns.length} of {hymns.length} hymns
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Hymns Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        
        {filteredHymns.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-2">No hymns found</h3>
            <p className="text-amber-700">Try different search terms</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredHymns.map((hymn) => (
              <HymnCard
                key={hymn.number}
                mandalaNumber={mandalaNum}
                hymnNumber={hymn.number}
                title={hymn.title}
                titleEnglish={hymn.titleEnglish}
                deity={hymn.deity}
                deityIcon={hymn.deityIcon}
                verseCount={hymn.verseCount}
                composer={hymn.composer}
                theme={hymn.theme}
                hasStory={hymn.hasStory}
              />
            ))}
          </div>
        )}
      </section>

      {/* Educational Note */}
      <section className="bg-gradient-to-r from-amber-100 to-orange-100 border-t-2 border-amber-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-amber-200">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">🎧</span>
              How to Experience Each Hymn
            </h3>
            <div className="space-y-3 text-amber-800">
              <p className="flex items-start gap-3">
                <span className="text-amber-600 font-bold text-xl">1.</span>
                <span><strong>Click any hymn card</strong> to view all verses with Sanskrit text and translations</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-amber-600 font-bold text-xl">2.</span>
                <span><strong>Listen to authentic Vedic chanting</strong> from the AASI Archive - recorded by trained pandits</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-amber-600 font-bold text-xl">3.</span>
                <span><strong>Explore rich metadata</strong> - learn about the deity, composer, theme, and cultural context</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-amber-600 font-bold text-xl">4.</span>
                <span><strong>Read comic stories</strong> where available - visual retellings for engaging learning</span>
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default MandalaDetail

