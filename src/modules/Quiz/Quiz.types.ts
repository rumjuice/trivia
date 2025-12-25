export enum ResponseCode {
  SUCCESS,
  NO_RESULTS,
  INVALID_PARAMETER,
  TOKEN_NOT_FOUND,
  TOKEN_EMPTY,
  RATE_LIMIT,
}
export type Difficulty = 'easy' | 'medium' | 'hard';

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

export type GetQuizParams = {
  categoryId?: number;
  difficulty?: Difficulty;
  type?: 'boolean' | 'multiple';
  amount?: number;
};
export type GetQuizResponse = {
  response_code: ResponseCode;
  results: Quiz[];
};
