import type { Lesson } from '../../types/story';

interface LessonSectionProps {
  lesson: Lesson;
}

export default function LessonSection({ lesson }: LessonSectionProps) {
  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-300 shadow-xl">
        {/* Icon and Title */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">✨</span>
          <h2 className="text-2xl font-bold text-green-900">The Lesson</h2>
        </div>

        {/* Lesson Title */}
        <h3 className="text-xl font-semibold text-green-800 mb-4">
          {lesson.title}
        </h3>

        {/* Main Content */}
        <div className="bg-white/70 rounded-xl p-6 mb-6">
          <p className="text-gray-800 text-lg leading-relaxed font-serif">
            {lesson.content}
          </p>
        </div>

        {/* Practical Application */}
        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-6 border-l-4 border-amber-600">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">💡</span>
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">
                Apply This Wisdom:
              </h4>
              <p className="text-gray-800 leading-relaxed">
                {lesson.practicalApplication}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
