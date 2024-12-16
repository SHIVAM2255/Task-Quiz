import React from 'react';
import { QuizStats as QuizStatsType } from '../types/quiz';
import { Trophy, XCircle, CircleEqual } from 'lucide-react';

interface QuizStatsProps {
  stats: QuizStatsType;
}

export function QuizStats({ stats }: QuizStatsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Quiz Statistics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center p-3 bg-green-50 rounded-lg">
          <Trophy className="w-6 h-6 text-green-600 mb-2" />
          <span className="text-sm text-gray-600">Correct</span>
          <span className="text-lg font-bold text-green-600">{stats.correctAnswers}</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-red-50 rounded-lg">
          <XCircle className="w-6 h-6 text-red-600 mb-2" />
          <span className="text-sm text-gray-600">Incorrect</span>
          <span className="text-lg font-bold text-red-600">{stats.incorrectAnswers}</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
          <CircleEqual className="w-6 h-6 text-blue-600 mb-2" />
          <span className="text-sm text-gray-600">Total</span>
          <span className="text-lg font-bold text-blue-600">{stats.totalAnswered}</span>
        </div>
      </div>
    </div>
  );
}