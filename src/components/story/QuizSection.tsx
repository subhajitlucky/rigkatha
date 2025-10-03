import { useState } from 'react';
import type { QuizQuestion } from '../../types/story';

interface QuizSectionProps {
  quiz: QuizQuestion;
}

export default function QuizSection({ quiz }: QuizSectionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (showResult) return; // Don't allow changing after submission
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const isCorrect = selectedAnswer === quiz.correctAnswer;

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-300 shadow-xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🎯</span>
          <h2 className="text-2xl font-bold text-blue-900">Test Your Wisdom</h2>
        </div>

        {/* Question */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
          <p className="text-lg font-semibold text-gray-800 leading-relaxed">
            {quiz.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {quiz.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === quiz.correctAnswer;
            
            let bgColor = 'bg-white hover:bg-blue-50';
            let borderColor = 'border-gray-300';
            let textColor = 'text-gray-800';

            if (showResult) {
              if (isCorrectAnswer) {
                bgColor = 'bg-green-100';
                borderColor = 'border-green-500';
                textColor = 'text-green-900';
              } else if (isSelected && !isCorrect) {
                bgColor = 'bg-red-100';
                borderColor = 'border-red-500';
                textColor = 'text-red-900';
              }
            } else if (isSelected) {
              bgColor = 'bg-blue-100';
              borderColor = 'border-blue-500';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`
                  w-full text-left p-4 rounded-xl border-2 transition-all duration-300
                  ${bgColor} ${borderColor} ${textColor}
                  ${!showResult ? 'hover:scale-[1.02] cursor-pointer' : 'cursor-default'}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-grow">{option}</span>
                  {showResult && isCorrectAnswer && <span className="text-2xl">✓</span>}
                  {showResult && isSelected && !isCorrect && <span className="text-2xl">✗</span>}
                </div>
              </button>
            );
          })}
        </div>

        {/* Submit Button */}
        {!showResult && (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className={`
              w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300
              ${
                selectedAnswer !== null
                  ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            Submit Answer
          </button>
        )}

        {/* Result */}
        {showResult && (
          <div className={`
            rounded-xl p-6 mb-4 border-2
            ${isCorrect ? 'bg-green-100 border-green-500' : 'bg-orange-100 border-orange-500'}
          `}>
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{isCorrect ? '🎉' : '📚'}</span>
              <div>
                <h3 className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-900' : 'text-orange-900'}`}>
                  {isCorrect ? 'Excellent! You understood the wisdom!' : 'Good try! Let\'s learn together:'}
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  {quiz.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Try Again Button */}
        {showResult && (
          <button
            onClick={handleReset}
            className="w-full py-3 rounded-xl font-semibold bg-gray-600 text-white hover:bg-gray-700 transition-all duration-300"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
