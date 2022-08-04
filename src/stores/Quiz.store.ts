import { makeAutoObservable, runInAction } from 'mobx';
import quizRepo from '../modules/Home/repos';
import { Quiz } from '../modules/Home/Types.home';

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
        this.error = error;
      });
    }
  };

  setAnswer = (answer: string, index: number): void => {
    this.quiz[index].answer = answer;
  };

  clear = (): void => {
    this.quiz = [];
    this.error = undefined;
  };
}
