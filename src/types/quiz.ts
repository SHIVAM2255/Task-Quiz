export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizStats {
  totalAnswered: number;
  correctAnswers: number;
  incorrectAnswers: number;
}