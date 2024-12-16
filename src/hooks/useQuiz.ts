import { useState, useCallback } from 'react';
import { Question, QuizStats } from '../types/quiz';
import { questions } from '../data/questions';

export function useQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [stats, setStats] = useState<QuizStats>({
    totalAnswered: 0,
    correctAnswers: 0,
    incorrectAnswers: 0
  });

  const getRandomQuestion = useCallback(() => {
    const availableQuestions = questions.filter(q => 
      !stats.totalAnswered || q.id !== currentQuestion?.id
    );
    if (availableQuestions.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    return availableQuestions[randomIndex];
  }, [currentQuestion, stats.totalAnswered]);

  const startNewSession = useCallback(() => {
    setStats({
      totalAnswered: 0,
      correctAnswers: 0,
      incorrectAnswers: 0
    });
    const newQuestion = getRandomQuestion();
    setCurrentQuestion(newQuestion);
  }, [getRandomQuestion]);

  const submitAnswer = useCallback((selectedAnswer: number) => {
    if (!currentQuestion) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setStats(prev => ({
      totalAnswered: prev.totalAnswered + 1,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      incorrectAnswers: prev.incorrectAnswers + (isCorrect ? 0 : 1)
    }));

    const nextQuestion = getRandomQuestion();
    setCurrentQuestion(nextQuestion);

    return isCorrect;
  }, [currentQuestion, getRandomQuestion]);

  return {
    currentQuestion,
    stats,
    startNewSession,
    submitAnswer
  };
}