import { useParams, Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import mandala1Hymns from '../../data/mandalas/mandala-1/hymns.json'
import mandalasData from '../../data/mandalas.json'

// Import verse data
import mandala1Hymn1Verses from '../../data/mandalas/mandala-1/hymn-1/verses.json'
import mandala1Hymn2Verses from '../../data/mandalas/mandala-1/hymn-2/verses.json'
import mandala1Hymn3Verses from '../../data/mandalas/mandala-1/hymn-3/verses.json'
import mandala1Hymn4Verses from '../../data/mandalas/mandala-1/hymn-4/verses.json'
import mandala1Hymn5Verses from '../../data/mandalas/mandala-1/hymn-5/verses.json'
import mandala1Hymn6Verses from '../../data/mandalas/mandala-1/hymn-6/verses.json'

// Map of all mandala hymns
const mandalaHymnsMap: Record<number, any[]> = {
  1: mandala1Hymns,
  // 2-10: Add as src/data/mandalas/mandala-{n}/hymns.json
}

// Map of hymns with detailed verses
const hymnVersesMap: Record<string, any> = {
  '1-1': mandala1Hymn1Verses,
  '1-2': mandala1Hymn2Verses,
  '1-3': mandala1Hymn3Verses,
  '1-4': mandala1Hymn4Verses,
  '1-5': mandala1Hymn5Verses,
  '1-6': mandala1Hymn6Verses,
  // More: Add as src/data/mandalas/mandala-{n}/hymn-{m}/verses.json
}

const HymnDetail = () => {
  const { mandalaNumber, hymnNumber } = useParams<{ mandalaNumber: string; hymnNumber: string }>()
  const mandalaNum = parseInt(mandalaNumber || '1')
  const hymnNum = parseInt(hymnNumber || '1')
  
  // Get hymn data
  const hymns = mandalaHymnsMap[mandalaNum] || []
  const hymn = hymns.find(h => h.number === hymnNum)
  const mandala = mandalasData.find(m => m.number === mandalaNum)
  
  // Get verse data if available
  const verseKey = `${mandalaNum}-${hymnNum}`
  const verseData = hymnVersesMap[verseKey]
  
  // Audio state
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  
  // Verse expansion state (which verses have word meanings expanded)
  const [expandedVerses, setExpandedVerses] = useState<Set<number>>(new Set())
  
  const toggleVerseExpansion = (verseNum: number) => {
    setExpandedVerses(prev => {
      const newSet = new Set(prev)
      if (newSet.has(verseNum)) {
        newSet.delete(verseNum)
      } else {
        newSet.add(verseNum)
      }
      return newSet
    })
  }
  
  // Construct audio URL from AASI Archive
  const audioUrl = `https://github.com/aasi-archive/rv-audio/raw/main/data/${mandalaNum}/${hymnNum}.mp3`
  
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => setIsPlaying(false)
    const handleError = () => {
      setAudioError(true)
      setIsPlaying(false)
    }

    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [])

  const toggleAudio = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      audio.currentTime = 0
      setIsPlaying(false)
    } else {
      audio.currentTime = 0
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setAudioError(true))
    }
  }
  
  if (!hymn || !mandala) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Hymn Not Found</h1>
          <Link 
            to={`/browse/mandala/${mandalaNum}`} 
            className="text-amber-600 hover:underline"
          >
            ← Back to Mandala {mandalaNum}
          </Link>
        </div>
      </div>
    )
  }

  // Navigation
  const prevHymn = hymn.number > 1 ? hymn.number - 1 : null
  const nextHymn = hymn.number < hymns.length ? hymn.number + 1 : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${mandala.color} border-b-2 border-amber-300`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <Link 
              to="/browse/mandala" 
              className="text-amber-700 hover:text-amber-900 font-medium"
            >
              All Mandalas
            </Link>
            <span className="text-amber-600">/</span>
            <Link 
              to={`/browse/mandala/${mandalaNum}`} 
              className="text-amber-700 hover:text-amber-900 font-medium"
            >
              Mandala {mandalaNum}
            </Link>
            <span className="text-amber-600">/</span>
            <span className="text-amber-900 font-semibold">Hymn {hymnNum}</span>
          </div>

          {/* Hymn Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-6xl">{hymn.deityIcon}</div>
              <div className="text-5xl font-bold text-amber-900">{hymnNum}</div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-3 font-serif">
              {hymn.title}
            </h1>
            
            <p className="text-2xl text-amber-800 mb-4">
              {hymn.titleEnglish}
            </p>
            
            <div className="flex items-center justify-center gap-3 text-amber-700">
              <span className="text-sm">Mandala {mandalaNum}.{hymnNum}</span>
              <span>•</span>
              <span className="text-sm">{hymn.verseCount} Verses</span>
              <span>•</span>
              <span className="text-sm">Deity: {hymn.deity}</span>
            </div>
          </div>

          {/* Audio Player */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-amber-200 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-bold text-amber-900 mb-1 flex items-center justify-center md:justify-start gap-2">
                  <span>🎧</span>
                  <span>Authentic Vedic Chanting</span>
                </h3>
                <p className="text-sm text-amber-700">
                  Audio plays complete Sukta {hymnNum} (all {hymn.verseCount} verses from this hymn in traditional order)
                </p>
                <p className="text-xs text-amber-600 mt-1">
                  Source: AASI Archive • Chanted by trained Vedic pandits • Plays entire hymn sequentially
                  {audioError && <span className="block text-red-600 font-semibold">• Audio currently unavailable for this hymn</span>}
                </p>
              </div>
              
              <button
                onClick={toggleAudio}
                disabled={audioError}
                className={`
                  px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3
                  ${audioError 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : isPlaying 
                      ? 'bg-green-600 text-white shadow-xl animate-pulse hover:bg-green-700' 
                      : 'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-xl hover:scale-105'
                  }
                `}
                title={audioError ? 'Audio not available' : 'Listen to authentic Vedic chanting'}
              >
                <span className="text-3xl">
                  {audioError ? '🔇' : isPlaying ? '⏸️' : '🔊'}
                </span>
                <span>
                  {audioError ? 'Audio N/A' : isPlaying ? 'Playing...' : 'Listen Now'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Metadata Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          
          {/* About This Hymn */}
          <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-lg">
            <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <span>📖</span>
              <span>About This Hymn</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {hymn.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-amber-600 font-semibold text-sm">Composer:</span>
                <span className="text-gray-800 text-sm">{hymn.composer}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-600 font-semibold text-sm">Theme:</span>
                <span className="text-gray-800 text-sm">{hymn.theme}</span>
              </div>
            </div>
          </div>

          {/* Cultural Significance */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200 shadow-lg">
            <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <span>✨</span>
              <span>Cultural Significance</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {hymn.culturalSignificance}
            </p>
            
            {/* Keywords */}
            <div className="mt-4">
              <div className="text-sm text-amber-700 font-semibold mb-2">Key Themes:</div>
              <div className="flex flex-wrap gap-2">
                {hymn.keywords.map((keyword: string, index: number) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white border border-amber-200 rounded-full text-xs text-amber-900"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Story Card (if available) */}
        {hymn.hasStory && (
          <div className="mb-12 bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 border-2 border-orange-300 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-7xl">🌟</div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-amber-900 mb-2">
                  Comic Story Available!
                </h2>
                <p className="text-amber-800 mb-4">
                  We've created a beautiful visual story based on this hymn. Experience the wisdom through engaging illustrations and characters!
                </p>
                <Link
                  to={`/story/${hymn.storyId}`}
                  className="inline-block px-6 py-3 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-colors shadow-lg"
                >
                  📚 Read the Comic Story
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Verses Section */}
        <div className="bg-white rounded-2xl p-8 border-2 border-amber-200 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center flex items-center justify-center gap-3">
            <span>📜</span>
            <span>Sacred Verses</span>
          </h2>
          
          {verseData && verseData.verses ? (
            <div className="space-y-8">
              {verseData.verses.map((verse: any) => (
                <div 
                  key={verse.number}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200"
                >
                  {/* Verse Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                        {verse.number}
                      </div>
                      <div className="text-sm text-amber-700 font-semibold">
                        Mandala {mandalaNum}.{hymnNum}.{verse.number}
                      </div>
                    </div>
                  </div>

                  {/* Sanskrit Text */}
                  <div className="bg-white rounded-lg p-6 mb-4 shadow-sm border border-amber-200">
                    <p className="text-2xl sm:text-3xl text-center font-serif text-amber-900 leading-relaxed">
                      {verse.sanskrit}
                    </p>
                  </div>

                  {/* Transliteration */}
                  <div className="bg-amber-100/50 rounded-lg p-4 mb-4 border border-amber-200">
                    <div className="text-xs text-amber-700 font-semibold mb-1">TRANSLITERATION:</div>
                    <p className="text-base italic text-gray-800 leading-relaxed">
                      {verse.transliteration}
                    </p>
                  </div>

                  {/* Translation */}
                  <div className="bg-white rounded-lg p-4 mb-4 border border-amber-200">
                    <div className="text-xs text-amber-700 font-semibold mb-2">TRANSLATION:</div>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      {verse.translation}
                    </p>
                  </div>

                  {/* Word Meanings - Expandable */}
                  <div className="mb-3">
                    <button
                      onClick={() => toggleVerseExpansion(verse.number)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-amber-200 to-orange-200 hover:from-amber-300 hover:to-orange-300 rounded-lg border border-amber-300 transition-colors"
                    >
                      <span className="font-semibold text-amber-900 flex items-center gap-2">
                        <span>📖</span>
                        <span>Word-by-Word Meanings</span>
                      </span>
                      <svg 
                        className={`w-5 h-5 text-amber-900 transition-transform ${expandedVerses.has(verse.number) ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {expandedVerses.has(verse.number) && (
                      <div className="mt-3 bg-white rounded-lg p-4 border border-amber-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {Object.entries(verse.wordMeanings).map(([word, meaning]: [string, any], idx) => (
                            <div key={idx} className="flex items-start gap-2 p-2 bg-amber-50 rounded border border-amber-100">
                              <span className="font-bold text-amber-900 font-serif">{word}</span>
                              <span className="text-amber-600">→</span>
                              <span className="text-sm text-gray-700">{meaning}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Explanation */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                    <div className="text-xs text-blue-700 font-semibold mb-2 flex items-center gap-2">
                      <span>💡</span>
                      <span>EXPLANATION:</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {verse.explanation}
                    </p>
                  </div>
                </div>
              ))}

              {/* Overall Context */}
              {verseData.overallTheme && (
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 mt-8">
                  <h3 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <span>🌟</span>
                    <span>Overall Theme</span>
                  </h3>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    {verseData.overallTheme}
                  </p>
                  
                  {verseData.culturalContext && (
                    <>
                      <h4 className="text-lg font-bold text-purple-900 mb-2 flex items-center gap-2">
                        <span>🏛️</span>
                        <span>Cultural Context</span>
                      </h4>
                      <p className="text-gray-800 leading-relaxed">
                        {verseData.culturalContext}
                      </p>
                    </>
                  )}
                </div>
              )}

              {/* Sources */}
              {verseData.sources && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-xs text-gray-600 font-semibold mb-2">SOURCES:</div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {verseData.sources.map((source: string, idx: number) => (
                      <li key={idx}>• {source}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200">
              <div className="text-6xl mb-4">🚧</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">
                Verses Coming Soon
              </h3>
              <p className="text-amber-700 max-w-2xl mx-auto mb-6">
                We're working on adding all {hymn.verseCount} verses with Sanskrit text, transliteration, and English translations. 
                Each verse will include word-by-word meanings and cultural context.
              </p>
              <div className="inline-block bg-amber-100 px-6 py-3 rounded-xl border border-amber-300">
                <p className="text-sm text-amber-900">
                  <strong>For now:</strong> Listen to the complete authentic chanting above 🎧
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {prevHymn ? (
            <Link
              to={`/browse/mandala/${mandalaNum}/hymn/${prevHymn}`}
              className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous Hymn</span>
            </Link>
          ) : (
            <div></div>
          )}

          <Link
            to={`/browse/mandala/${mandalaNum}`}
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors"
          >
            Back to All Hymns
          </Link>

          {nextHymn ? (
            <Link
              to={`/browse/mandala/${mandalaNum}/hymn/${nextHymn}`}
              className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors shadow-md"
            >
              <span>Next Hymn</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </section>

    </div>
  )
}

export default HymnDetail

