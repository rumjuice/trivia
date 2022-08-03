import { ReactElement, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  RouteObject,
  Routes,
} from 'react-router-dom';
import HomeRoutes from './modules/Home/Routes.home';
import { loadStores, StoreProvider } from './stores/Bootstrap.store';

function App(): ReactElement {
  const [store] = useState(loadStores());

  const routes: RouteObject[] = [...HomeRoutes];

  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <div className="flex h-screen w-screen bg-slate-50">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
