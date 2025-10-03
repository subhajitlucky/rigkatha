import { useState, useRef, useEffect } from 'react';
import type { Shloka } from '../../types/story';

interface ShlokaDisplayProps {
  shloka: Shloka;
}

export default function ShlokaDisplay({ shloka }: ShlokaDisplayProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Construct audio URL from AASI Archive
  // Format: https://github.com/aasi-archive/rv-audio/raw/main/data/{mandala}/{hymn}.mp3
  const audioUrl = `https://github.com/aasi-archive/rv-audio/raw/main/data/${shloka.mandalaSuktaRik.mandala}/${shloka.mandalaSuktaRik.sukta}.mp3`;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      setAudioError(true);
      setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Pause the audio
      audio.pause();
      audio.currentTime = 0; // Reset to beginning
      setIsPlaying(false);
    } else {
      // Play the audio from beginning
      audio.currentTime = 0;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setAudioError(true));
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-8 border-4 border-amber-300 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">📜</span>
            <h2 className="text-2xl font-bold text-amber-900">The Sacred Verse</h2>
          </div>
          
          {/* Speaker Icon - Play Authentic Vedic Chanting */}
          <button
            onClick={toggleAudio}
            disabled={audioError}
            className={`
              group relative px-4 py-2 rounded-xl font-semibold transition-all
              ${audioError 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : isPlaying 
                  ? 'bg-green-600 text-white shadow-lg animate-pulse' 
                  : 'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-lg hover:scale-105'
              }
            `}
            title={audioError ? 'Audio not available' : 'Listen to authentic Vedic chanting'}
          >
            <span className="text-xl">
              {audioError ? '🔇' : isPlaying ? '⏸️' : '🔊'}
            </span>
            <span className="ml-2 text-sm hidden sm:inline">
              {audioError ? 'N/A' : isPlaying ? 'Playing...' : 'Listen'}
            </span>
          </button>
        </div>

        {/* Sanskrit Text */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
          <p className="text-2xl text-center font-serif text-amber-900 leading-relaxed mb-2">
            {shloka.sanskrit}
          </p>
        </div>

        {/* Transliteration */}
        <div className="bg-amber-100/50 rounded-xl p-4 mb-6">
          <p className="text-lg text-center italic text-gray-700 leading-relaxed">
            {shloka.transliteration}
          </p>
        </div>

        {/* Translation */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6 mb-4 border-l-4 border-amber-600">
          <p className="text-lg text-gray-800 leading-relaxed font-serif">
            "{shloka.translation}"
          </p>
        </div>

        {/* Reference */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-amber-900">
            <span className="text-xl">🕉️</span>
            <span className="font-semibold">{shloka.reference}</span>
          </div>
          <div className="text-sm text-gray-600">
            Mandala {shloka.mandalaSuktaRik.mandala} · 
            Sukta {shloka.mandalaSuktaRik.sukta} · 
            Rik {shloka.mandalaSuktaRik.rik}
          </div>
        </div>

        {/* Audio Attribution & Info */}
        {!audioError && (
          <div className="mt-4 pt-4 border-t-2 border-amber-200">
            <div className="text-xs text-gray-600 text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-amber-800 bg-amber-50 rounded-lg py-2 px-4 border border-amber-200">
                <span className="text-base">�</span>
                <p className="font-semibold">
                  Audio plays complete Sukta {shloka.mandalaSuktaRik.sukta} (all verses from this hymn)
                </p>
              </div>
              <p className="italic">
                Source:{' '}
                <a 
                  href="https://github.com/aasi-archive/rv-audio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-900 underline font-semibold"
                >
                  AASI Archive
                </a>
                {' '}• Authentic Vedic Chanting by Trained Pandits
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
