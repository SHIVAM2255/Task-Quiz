import React from 'react';
import { Brain } from 'lucide-react';
import { useQuiz } from './hooks/useQuiz';
import { Question } from './components/Question';
import { QuizStats } from './components/QuizStats';

function App() {
  const { currentQuestion, stats, startNewSession, submitAnswer } = useQuiz();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Time!</h1>
          <p className="text-gray-600">Test your knowledge with random questions</p>
        </div>

        <div className="space-y-6">
          <QuizStats stats={stats} />

          {currentQuestion ? (
            <Question
              question={currentQuestion}
              onAnswer={submitAnswer}
            />
          ) : (
            <div className="text-center">
              <button
                onClick={startNewSession}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Start New Quiz Session
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;