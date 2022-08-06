import { ReactElement } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  RouteObject,
  Routes,
} from 'react-router-dom';
import HomeRoutes from '../modules/Home/Home.routes';
import QuizRoutes from '../modules/Quiz/Quiz.routes';
import ResultsRoutes from '../modules/Results/Results.routes';

function Router(): ReactElement {
  const routes: RouteObject[] = [
    ...HomeRoutes,
    ...QuizRoutes,
    ...ResultsRoutes,
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
