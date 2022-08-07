import { createContext, FC, useContext } from 'react';
import QuizStore from '../modules/Quiz/stores';

class Store {
  quiz: QuizStore;

  constructor() {
    this.quiz = new QuizStore();
  }
}

export const StoreContext = createContext({} as Store);

export function useStore(): Store {
  return useContext(StoreContext);
}

export function loadStore(): Store {
  return new Store();
}

export const StoreProvider: FC<{ store: Store; children: JSX.Element }> = ({
  store,
  children,
}) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
