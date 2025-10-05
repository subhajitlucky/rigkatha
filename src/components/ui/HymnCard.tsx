import { Link } from 'react-router-dom'

interface HymnCardProps {
  mandalaNumber: number
  hymnNumber: number
  title: string
  titleEnglish: string
  deity: string
  deityIcon: string
  verseCount: number
  composer: string
  theme: string
  hasStory?: boolean
}

const HymnCard = ({
  mandalaNumber,
  hymnNumber,
  title,
  titleEnglish,
  deity,
  deityIcon,
  verseCount,
  composer,
  theme,
  hasStory = false
}: HymnCardProps) => {
  return (
    <Link
      to={`/browse/mandala/${mandalaNumber}/hymn/${hymnNumber}`}
      className="group block"
    >
      <div className="relative h-full bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        
        {/* Story Badge (if has comic story) */}
        {hasStory && (
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
              <span>🌟</span>
              <span>Story</span>
            </div>
          </div>
        )}

        {/* Header with Hymn Number */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 border-b-2 border-amber-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-amber-900">
                {hymnNumber}
              </div>
              <div className="text-4xl">
                {deityIcon}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-amber-700 font-semibold">
                Mandala {mandalaNumber}
              </div>
              <div className="text-xs text-amber-600">
                Sukta {hymnNumber}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title in Devanagari */}
          <h3 className="text-lg font-bold text-amber-900 mb-2 line-clamp-2 font-serif">
            {title}
          </h3>

          {/* Title in English */}
          <p className="text-sm text-amber-700 mb-3 line-clamp-2">
            {titleEnglish}
          </p>

          {/* Deity */}
          <div className="mb-3">
            <div className="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <span className="text-xs font-semibold text-amber-900">Deity:</span>
              <span className="text-xs text-amber-700">{deity}</span>
            </div>
          </div>

          {/* Theme */}
          <div className="mb-3">
            <div className="flex items-start gap-2">
              <span className="text-xs text-amber-600">💭</span>
              <span className="text-xs text-amber-800 line-clamp-2 leading-relaxed">
                {theme}
              </span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-between pt-3 border-t border-amber-100">
            <div className="flex items-center gap-4 text-xs text-amber-700">
              <div className="flex items-center gap-1">
                <span>📜</span>
                <span>{verseCount} verses</span>
              </div>
            </div>
            
            {/* Arrow */}
            <svg 
              className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Composer (small text at bottom) */}
          <div className="mt-2 text-xs text-amber-600 italic">
            by {composer}
          </div>
        </div>

        {/* Hover Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none"></div>
      </div>
    </Link>
  )
}

export default HymnCard

