import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactElement, useState } from 'react';
import Router from './Router.bootstrap';
import { loadStore, StoreProvider } from './Store.bootstrap';

function App(): ReactElement {
  const [store] = useState(loadStore());
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retryOnMount: false,
          refetchOnWindowFocus: false,
          retry: false,
        },
        mutations: {
          retry: false,
        },
      },
    }),
  );

  return (
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="flex h-full w-full bg-neutral-50 overflow-auto">
          <Router />
        </div>
      </QueryClientProvider>
    </StoreProvider>
  );
}

export default App;
