import { Link } from 'react-router-dom'

interface PathCardProps {
  icon: string
  title: string
  description: string
  bestFor: string
  linkTo: string
  gradientFrom: string
  gradientTo: string
}

const PathCard = ({ icon, title, description, bestFor, linkTo, gradientFrom, gradientTo }: PathCardProps) => {
  return (
    <Link 
      to={linkTo}
      className="group block"
    >
      <div className={`
        relative overflow-hidden rounded-2xl border-2 border-amber-200
        bg-gradient-to-br ${gradientFrom} ${gradientTo}
        p-8 shadow-lg hover:shadow-2xl
        transform hover:-translate-y-2 transition-all duration-300
        h-full flex flex-col
      `}>
        
        {/* Icon */}
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-amber-900 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-amber-800 mb-4 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Best For Badge */}
        <div className="bg-white/60 backdrop-blur-sm rounded-lg px-4 py-2 mb-4">
          <p className="text-sm font-medium text-amber-900">
            Perfect for: <span className="font-bold">{bestFor}</span>
          </p>
        </div>

        {/* Explore Button */}
        <div className="flex items-center justify-center space-x-2 text-amber-900 font-semibold group-hover:text-amber-700">
          <span>Explore</span>
          <svg 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-amber-200/20 rounded-bl-full" />
      </div>
    </Link>
  )
}

export default PathCard
