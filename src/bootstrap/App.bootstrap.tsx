import { ReactElement, useState } from 'react';
import Router from './Router.bootstrap';
import { loadStore, StoreProvider } from './Store.bootstrap';

function App(): ReactElement {
  const [store] = useState(loadStore());

  return (
    <StoreProvider store={store}>
      <div className="flex h-screen w-screen bg-slate-50 py-4">
        <Router />
      </div>
    </StoreProvider>
  );
}

export default App;
