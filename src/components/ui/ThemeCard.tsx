import { Link } from 'react-router-dom'

interface ThemeCardProps {
  id: string
  name: string
  nameEnglish: string
  emoji: string
  description: string
  coreMessage: string
  practicalApplication: string
  relatedDeities: string[]
  ageGroup: string
  color: string
  keyVersesCount: number
}

const ThemeCard = ({
  id,
  name,
  nameEnglish,
  emoji,
  description,
  coreMessage,
  practicalApplication,
  relatedDeities,
  ageGroup,
  color,
  keyVersesCount
}: ThemeCardProps) => {
  return (
    <Link 
      to={`/browse/theme/${id}`}
      className="group block"
    >
      <div className={`
        relative overflow-hidden rounded-2xl border-2 border-amber-300
        bg-gradient-to-br ${color}
        p-6 shadow-lg hover:shadow-2xl
        transform hover:-translate-y-1 transition-all duration-300
        h-full flex flex-col
      `}>
        
        {/* Header */}
        <div className="flex items-start space-x-4 mb-4">
          {/* Emoji Icon */}
          <div className="text-6xl flex-shrink-0 group-hover:scale-110 transition-transform">
            {emoji}
          </div>
          
          {/* Name */}
          <div className="flex-1 min-w-0">
            <h3 className="text-3xl font-bold text-amber-900 mb-1">
              {name}
            </h3>
            <p className="text-lg text-amber-800 font-semibold">
              {nameEnglish}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-amber-800 leading-relaxed mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Core Message */}
        <div className="bg-gradient-to-r from-amber-200/50 to-orange-200/50 rounded-lg p-3 mb-4">
          <div className="text-xs font-semibold text-amber-900 mb-1">💡 Core Teaching</div>
          <p className="text-xs text-amber-800 leading-relaxed font-medium line-clamp-2">
            "{coreMessage}"
          </p>
        </div>

        {/* Practical Application */}
        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 mb-4">
          <div className="text-xs font-semibold text-amber-900 mb-1">🎯 Apply It</div>
          <p className="text-xs text-amber-800 leading-relaxed line-clamp-2">
            {practicalApplication}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3">
            <div className="text-2xl font-bold text-amber-900">{keyVersesCount}</div>
            <div className="text-xs text-amber-700">Key Verses</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3">
            <div className="text-lg font-bold text-amber-900">{relatedDeities.length}</div>
            <div className="text-xs text-amber-700">Related Deities</div>
          </div>
        </div>

        {/* Related Deities */}
        <div className="mb-4">
          <div className="text-xs text-amber-700 mb-1 font-semibold">Related Deities:</div>
          <div className="flex flex-wrap gap-1">
            {relatedDeities.slice(0, 4).map((deity, index) => (
              <span 
                key={index}
                className="text-xs bg-white/60 text-amber-900 px-2 py-1 rounded-full"
              >
                {deity}
              </span>
            ))}
            {relatedDeities.length > 4 && (
              <span className="text-xs bg-white/60 text-amber-900 px-2 py-1 rounded-full">
                +{relatedDeities.length - 4}
              </span>
            )}
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
            Explore Teachings
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

        {/* Decorative emoji watermark */}
        <div className="absolute -bottom-4 -right-4 text-9xl opacity-5">
          {emoji}
        </div>
      </div>
    </Link>
  )
}

export default ThemeCard
