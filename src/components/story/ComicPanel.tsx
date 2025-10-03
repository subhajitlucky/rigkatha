import type { ComicPanel as ComicPanelType } from '../../types/story';

interface ComicPanelProps {
  panel: ComicPanelType;
  totalPanels: number;
}

export default function ComicPanel({ panel, totalPanels }: ComicPanelProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      {/* Panel Number Indicator */}
      <div className="text-center mb-4">
        <span className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold">
          Panel {panel.panelNumber} of {totalPanels}
        </span>
      </div>

      {/* Comic Panel Image */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-900 mb-6">
        <img
          src={panel.imageUrl}
          alt={panel.imageAlt}
          className="w-full aspect-video object-cover"
        />

        {/* Dialogues Overlay (Speech bubbles, captions, thoughts) */}
        {panel.dialogues.length > 0 && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              {panel.dialogues.map((dialogue, index) => (
                <div
                  key={index}
                  className={`
                    mb-3 p-4 rounded-xl max-w-2xl backdrop-blur-sm
                    ${dialogue.type === 'speech' ? 'bg-white/95 text-gray-900' : ''}
                    ${dialogue.type === 'thought' ? 'bg-blue-100/95 text-blue-900 italic' : ''}
                    ${dialogue.type === 'caption' ? 'bg-amber-100/95 text-amber-900 font-semibold text-center mx-auto' : ''}
                  `}
                >
                  {dialogue.type !== 'caption' && (
                    <div className="text-xs font-bold text-gray-600 mb-1">
                      {dialogue.character}
                    </div>
                  )}
                  <div className="text-base leading-relaxed">
                    {dialogue.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Narration Below Panel */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-amber-200">
        <p className="text-gray-800 text-lg leading-relaxed font-serif">
          {panel.narration}
        </p>
      </div>
    </div>
  );
}
