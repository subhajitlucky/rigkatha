interface StoryNavigationProps {
  currentPanel: number;
  totalPanels: number;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export default function StoryNavigation({
  currentPanel,
  totalPanels,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}: StoryNavigationProps) {
  return (
    <div className="flex items-center justify-center gap-6 my-8">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`
          px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300
          ${
            canGoPrevious
              ? 'bg-amber-600 text-white hover:bg-amber-700 hover:scale-105 shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }
        `}
      >
        ← Previous
      </button>

      {/* Progress Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPanels }, (_, i) => (
          <div
            key={i}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${
                i + 1 === currentPanel
                  ? 'bg-amber-600 scale-125'
                  : i + 1 < currentPanel
                  ? 'bg-amber-400'
                  : 'bg-gray-300'
              }
            `}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`
          px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300
          ${
            canGoNext
              ? 'bg-amber-600 text-white hover:bg-amber-700 hover:scale-105 shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }
        `}
      >
        Next →
      </button>
    </div>
  );
}
