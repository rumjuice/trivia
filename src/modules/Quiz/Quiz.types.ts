export type Quiz = {
  category: string;
  correct_answer: string;
  question: string;
  answer?: string;
  is_correct?: boolean;
};

export type Category = {
  id: number;
  name: string;
};
export type Difficulty = 'easy' | 'medium' | 'hard';

export type GetQuizParams = {
  categoryId?: number;
  difficulty?: Difficulty;
  type?: 'boolean' | 'multiple';
  amount?: number;
};
