import { Link } from 'react-router';
import type { StoryPreview } from '../../types/story';

interface StoryCardProps {
  story: StoryPreview;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <Link
      to={`/story/${story.id}`}
      className="group block bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden">
        <img
          src={story.thumbnailUrl}
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Panel Count Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-amber-900">
          📖 {story.panelCount} panels
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-600 transition-colors">
          {story.title}
        </h3>

        {/* Subtitle */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {story.subtitle}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
          <span className="flex items-center gap-1 text-gray-600">
            ⏱️ {story.readingTime} min
          </span>
          <span className="flex items-center gap-1 text-gray-600">
            📜 {story.shlokaReference}
          </span>
        </div>

        {/* Theme Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {story.theme.slice(0, 3).map((theme) => (
            <span
              key={theme}
              className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full font-medium"
            >
              {theme}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span className="text-amber-600 font-semibold group-hover:text-amber-700">
            Read Story →
          </span>
          <div className="text-2xl group-hover:translate-x-1 transition-transform">
            📚
          </div>
        </div>
      </div>
    </Link>
  );
}
