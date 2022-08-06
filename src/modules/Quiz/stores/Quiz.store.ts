import { makeAutoObservable, runInAction } from 'mobx';
import { Quiz } from '../Quiz.types';
import quizRepo from '../repos';

export default class QuizStore {
  quiz: Quiz[] = [];
  error: Error | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  getQuiz = async (): Promise<void> => {
    try {
      const quiz = await quizRepo.get();
      runInAction(() => {
        this.quiz = quiz.results;
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

  getResults = (): void => {
    //
  };

  clear = (): void => {
    this.quiz = [];
    this.error = undefined;
  };
}
