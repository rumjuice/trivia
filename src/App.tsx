import { ReactElement } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  RouteObject,
  Routes,
} from 'react-router-dom';
import HomeRoutes from './modules/Home/Routes';

function App(): ReactElement {
  const routes: RouteObject[] = [...HomeRoutes];

  return (
    <BrowserRouter>
      <div className="flex h-screen w-screen bg-slate-50">
        {/* <div className=""> */}
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
