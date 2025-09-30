import { Link } from 'react-router-dom'

interface DeityCardProps {
  id: string
  name: string
  nameEnglish: string
  title: string
  emoji: string
  description: string
  symbolism: string
  character: string
  hymnCount: number
  ageGroup: string
  color: string
  stories: string[]
}

const DeityCard = ({
  id,
  name,
  nameEnglish,
  title,
  emoji,
  description,
  symbolism,
  character,
  hymnCount,
  ageGroup,
  color,
  stories
}: DeityCardProps) => {
  return (
    <Link 
      to={`/browse/deity/${id}`}
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
          
          {/* Name & Title */}
          <div className="flex-1 min-w-0">
            <h3 className="text-3xl font-bold text-amber-900 mb-1">
              {name}
            </h3>
            <p className="text-lg text-amber-800 font-semibold mb-1">
              {nameEnglish}
            </p>
            <p className="text-sm text-amber-700 italic">
              {title}
            </p>
          </div>
        </div>

        {/* Character Badge */}
        <div className="mb-3">
          <div className="inline-block bg-amber-900 text-amber-50 text-xs font-semibold px-3 py-1 rounded-full">
            {character}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-amber-800 leading-relaxed mb-4 flex-grow line-clamp-4">
          {description}
        </p>

        {/* Symbolism */}
        <div className="bg-gradient-to-r from-amber-200/50 to-orange-200/50 rounded-lg p-3 mb-4">
          <div className="text-xs font-semibold text-amber-900 mb-1">✨ Symbolism</div>
          <p className="text-xs text-amber-800 leading-relaxed line-clamp-2">
            {symbolism}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3">
            <div className="text-2xl font-bold text-amber-900">{hymnCount}+</div>
            <div className="text-xs text-amber-700">Hymns</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3">
            <div className="text-lg font-bold text-amber-900">{stories.length}</div>
            <div className="text-xs text-amber-700">Stories Available</div>
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
            Explore Hymns
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

export default DeityCard
