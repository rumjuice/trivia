import { ReactElement, useState } from 'react';
import Router from './Router.bootstrap';
import { loadStore, StoreProvider } from './Store.bootstrap';

function App(): ReactElement {
  const [store] = useState(loadStore());

  return (
    <StoreProvider store={store}>
      <div className="flex h-screen w-screen bg-neutral-50 py-4 overflow-auto">
        <Router />
      </div>
    </StoreProvider>
  );
}

export default App;
