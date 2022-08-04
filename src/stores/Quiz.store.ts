import { makeAutoObservable, runInAction } from 'mobx';
import quizRepo from '../modules/Home/repos';
import { Quiz } from '../modules/Home/Types.home';

export default class QuizStore {
  quiz: Quiz[] = [];
  error: Error | undefined;

  constructor() {
    makeAutoObservable(this);

    this.quiz = [];
    this.error = undefined;
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

  clear = (): void => {
    this.quiz = [];
    this.error = undefined;
  };

  // get cartAmount(): number {
  //   return Object.values(this.cart).reduce((acc, item) => {
  //     return acc + item.quantity;
  //   }, 0);
  // }

  // get totalPrice(): number {
  //   return Object.values(this.cart).reduce((acc, item) => {
  //     return acc + (item.retail_price ?? 0) * item.quantity;
  //   }, 0);
  // }

  // addItemToCart(item: CartItem) {
  //   const prevCart = { ...this.cart };
  //   if (this.cart[item.id]) {
  //     this.cart = {
  //       ...prevCart,
  //       [item.id]: {
  //         ...prevCart[item.id],
  //         quantity: prevCart[item.id].quantity + 1,
  //       },
  //     };
  //   } else {
  //     this.cart = {
  //       ...prevCart,
  //       [item.id]: {
  //         ...item,
  //         quantity: 1,
  //       },
  //     };
  //   }
  // }

  // clearCart() {
  //   this.cart = {};
  // }
}
