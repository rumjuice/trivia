import { makeAutoObservable, runInAction } from 'mobx';
import { Category, Difficulty, Quiz } from '../Quiz.types';
import quizRepo from '../repos';

export default class QuizStore {
  quiz: Quiz[] = [];
  categories: Category[] = [];
  selectedCategoryId?: number;
  selectedDifficulty?: Difficulty;
  error: Error | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  getQuiz = async (): Promise<void> => {
    try {
      const quiz = await quizRepo.get({
        categoryId: this.selectedCategoryId,
        difficulty: this.selectedDifficulty,
        type: 'boolean',
        amount: 10,
      });
      runInAction(() => {
        this.quiz = quiz.results;
      });
    } catch (error) {
      runInAction(() => {
        this.error = new Error(error);
      });
    }
  };

  getCategories = async (): Promise<void> => {
    if (this.categories.length > 0) return;
    try {
      const categories = await quizRepo.getCategories();
      runInAction(() => {
        this.categories = categories.trivia_categories;
      });
    } catch (error) {
      runInAction(() => {
        this.error = new Error(error);
      });
    }
  };

  setAnswer = (answer: string, index: number): void => {
    this.quiz[index].answer = answer;
    this.quiz[index].is_correct =
      this.quiz[index].correct_answer === answer ? true : false;
  };

  setCategory = (categoryId?: number): void => {
    runInAction(() => {
      this.selectedCategoryId = categoryId;
    });
  };

  setDifficulty = (difficulty?: Difficulty): void => {
    runInAction(() => {
      this.selectedDifficulty = difficulty;
    });
  };

  clear = (): void => {
    this.quiz = [];
    this.error = undefined;
    this.selectedCategoryId = undefined;
    this.selectedDifficulty = undefined;
  };
}
