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
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-900 mb-4">
        <img
          src={panel.imageUrl}
          alt={panel.imageAlt}
          className="w-full aspect-video object-center"
        />
      </div>

      {panel.dialogues.length > 0 && (
        <div className="mb-6 space-y-3 rounded-2xl bg-amber-50/70 border border-amber-200 px-4 py-5 shadow-sm">
          {panel.dialogues.map((dialogue, index) => (
            <div key={index} className="space-y-1">
              {dialogue.type === 'caption' ? (
                <div className="text-center">
                  <span className="inline-block px-4 py-2 rounded-xl bg-amber-100 text-amber-900 font-semibold shadow">
                    {dialogue.text}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-3">
                  <div className="md:w-24">
                    {dialogue.character && (
                      <span className="inline-block rounded-full bg-amber-200/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-900 shadow-sm">
                        {dialogue.character}
                      </span>
                    )}
                  </div>
                  <div
                    className={`max-w-2xl px-4 py-3 rounded-2xl shadow-sm border transition-transform duration-200 md:hover:-translate-y-0.5 ${
                      dialogue.type === 'speech'
                        ? 'bg-white text-gray-900 border-amber-200'
                        : 'bg-sky-50 text-sky-900 border-sky-200 italic'
                    }`}
                  >
                    {dialogue.text}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Narration Below Panel */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-amber-200">
        <p className="text-gray-800 text-lg leading-relaxed font-serif">
          {panel.narration}
        </p>
      </div>
    </div>
  );
}
