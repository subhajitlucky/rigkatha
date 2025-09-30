import { Link } from 'react-router-dom'

interface MandalaCardProps {
  number: number
  name: string
  nameEnglish: string
  hymnCount: number
  verseCount: number
  primaryDeities: string[]
  composers: string
  character: string
  description: string
  specialFeatures: string
  ageGroup: string
  color: string
}

const MandalaCard = ({ 
  number, 
  name, 
  nameEnglish,
  hymnCount, 
  verseCount,
  primaryDeities,
  composers,
  character,
  description, 
  specialFeatures,
  ageGroup,
  color 
}: MandalaCardProps) => {
  return (
    <Link 
      to={`/browse/mandala/${number}`}
      className="group block"
    >
      <div className={`
        relative overflow-hidden rounded-2xl border-2 border-amber-300
        bg-gradient-to-br ${color}
        p-6 shadow-lg hover:shadow-2xl
        transform hover:-translate-y-1 transition-all duration-300
      `}>
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <div className="text-4xl font-bold text-amber-900">
                {number}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-amber-900">
                  {name}
                </h3>
                <p className="text-sm text-amber-700 font-medium">
                  {nameEnglish}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3">
            <div className="text-2xl font-bold text-amber-900">{hymnCount}</div>
            <div className="text-xs text-amber-700">Hymns (Suktas)</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3">
            <div className="text-2xl font-bold text-amber-900">{verseCount}</div>
            <div className="text-xs text-amber-700">Verses (Riks)</div>
          </div>
        </div>

        {/* Character */}
        <div className="mb-3">
          <div className="inline-block bg-amber-900 text-amber-50 text-xs font-semibold px-3 py-1 rounded-full">
            {character}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-amber-800 leading-relaxed mb-3 line-clamp-3">
          {description}
        </p>

        {/* Special Features */}
        <div className="bg-gradient-to-r from-amber-200/50 to-orange-200/50 rounded-lg p-3 mb-3">
          <div className="text-xs font-semibold text-amber-900 mb-1">✨ Special</div>
          <p className="text-xs text-amber-800 leading-relaxed line-clamp-2">
            {specialFeatures}
          </p>
        </div>

        {/* Composers */}
        <div className="mb-3">
          <div className="text-xs text-amber-700">
            <span className="font-semibold">Composers:</span> {composers}
          </div>
        </div>

        {/* Primary Deities */}
        <div className="mb-4">
          <div className="text-xs text-amber-700 mb-1 font-semibold">Primary Deities:</div>
          <div className="flex flex-wrap gap-1">
            {primaryDeities.map((deity, index) => (
              <span 
                key={index}
                className="text-xs bg-white/60 text-amber-900 px-2 py-1 rounded-full"
              >
                {deity}
              </span>
            ))}
          </div>
        </div>

        {/* Age Group */}
        <div className="mb-4">
          <div className="text-xs text-amber-600 italic">
            📚 {ageGroup}
          </div>
        </div>

        {/* Explore Button */}
        <div className="flex items-center justify-between pt-3 border-t border-amber-300/50">
          <div className="text-sm font-semibold text-amber-900 group-hover:text-amber-700">
            Explore Stories
          </div>
          <svg 
            className="w-5 h-5 text-amber-900 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Decorative mandala number watermark */}
        <div className="absolute -bottom-4 -right-4 text-9xl font-bold text-amber-900/5">
          {number}
        </div>
      </div>
    </Link>
  )
}

export default MandalaCard
