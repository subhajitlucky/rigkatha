import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import ComicPanel from '../../components/story/ComicPanel';
import StoryNavigation from '../../components/story/StoryNavigation';
import LessonSection from '../../components/story/LessonSection';
import ShlokaDisplay from '../../components/story/ShlokaDisplay';
import QuizSection from '../../components/story/QuizSection';
import type { Story } from '../../types/story';

export default function StoryReader() {
  const { storyId } = useParams<{ storyId: string }>();
  const navigate = useNavigate();
  const [currentPanel, setCurrentPanel] = useState(1);
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load story data
    const loadStory = async () => {
      try {
        setLoading(true);
        // Dynamic import based on storyId
        // For now, we'll handle the specific story we created
        if (storyId === 'agni-wise-fish') {
          const storyData = await import('../../data/stories/agni/wise-fish.json');
          setStory(storyData.default as Story);
        } else {
          setError('Story not found');
        }
      } catch (err) {
        console.error('Error loading story:', err);
        setError('Failed to load story');
      } finally {
        setLoading(false);
      }
    };

    loadStory();
  }, [storyId]);

  const handlePrevious = () => {
    if (currentPanel > 1) {
      setCurrentPanel(currentPanel - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (story && currentPanel < story.panels.length) {
      setCurrentPanel(currentPanel + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">📚</div>
          <p className="text-xl text-gray-700">Loading your story...</p>
        </div>
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Story Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'This story doesn\'t exist yet.'}</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-all"
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  const currentPanelData = story.panels.find((p) => p.panelNumber === currentPanel);
  const isStoryComplete = currentPanel > story.panels.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b-2 border-amber-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            <button
              onClick={() => navigate(`/browse/deity/${story.deity}`)}
              className="flex items-center gap-2 text-amber-700 hover:text-amber-900 font-semibold transition-colors"
            >
              ← Back to {story.deity.charAt(0).toUpperCase() + story.deity.slice(1)}
            </button>

            {/* Progress */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 hidden md:block">Progress:</span>
              <div className="flex items-center gap-1">
                {story.panels.map((_, index) => (
                  <div
                    key={index}
                    className={`
                      h-2 w-8 rounded-full transition-all
                      ${index + 1 <= currentPanel ? 'bg-amber-600' : 'bg-gray-300'}
                    `}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-amber-900">
                {Math.min(currentPanel, story.panels.length)}/{story.panels.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Story Title (shown at start) */}
      {currentPanel === 1 && (
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            {story.title}
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            {story.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white px-4 py-2 rounded-full border-2 border-amber-200 font-semibold text-amber-900">
              ⏱️ {story.readingTime} min read
            </span>
            <span className="bg-white px-4 py-2 rounded-full border-2 border-amber-200 font-semibold text-amber-900">
              📖 {story.panels.length} panels
            </span>
            <span className="bg-white px-4 py-2 rounded-full border-2 border-amber-200 font-semibold text-amber-900">
              📜 {story.shloka.reference}
            </span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Current Panel */}
        {currentPanelData && !isStoryComplete && (
          <>
            <ComicPanel panel={currentPanelData} totalPanels={story.panels.length} />
            <StoryNavigation
              currentPanel={currentPanel}
              totalPanels={story.panels.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
              canGoPrevious={currentPanel > 1}
              canGoNext={currentPanel < story.panels.length}
            />
          </>
        )}

        {/* Story Complete - Show Lesson, Shloka, Quiz */}
        {currentPanel === story.panels.length && (
          <div className="space-y-8">
            {/* Continue button to show lesson */}
            <div className="text-center">
              <button
                onClick={() => setCurrentPanel(currentPanel + 1)}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-xl"
              >
                ✨ Discover the Wisdom →
              </button>
            </div>
          </div>
        )}

        {isStoryComplete && (
          <>
            {/* Lesson */}
            <LessonSection lesson={story.lesson} />

            {/* Shloka */}
            <ShlokaDisplay shloka={story.shloka} />

            {/* Quiz */}
            {story.quiz && <QuizSection quiz={story.quiz} />}

            {/* Navigation to More Stories */}
            <div className="max-w-4xl mx-auto my-12 text-center">
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 border-2 border-amber-300">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">
                  Continue Your Journey
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to={`/browse/deity/${story.deity}`}
                    className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-all"
                  >
                    ← More {story.deity.charAt(0).toUpperCase() + story.deity.slice(1)} Stories
                  </Link>
                  <Link
                    to="/browse/deity"
                    className="px-6 py-3 bg-white text-amber-900 rounded-xl font-semibold border-2 border-amber-600 hover:bg-amber-50 transition-all"
                  >
                    Explore Other Deities →
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
