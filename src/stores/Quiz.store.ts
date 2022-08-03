import { makeAutoObservable } from 'mobx';

export default class QuizStore {
  // private _cart: IndexedCart = {};
  isCartReady = true;

  constructor() {
    makeAutoObservable(this);
  }

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
