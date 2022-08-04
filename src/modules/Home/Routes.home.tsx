import { RouteObject } from 'react-router-dom';
import HomePage from './pages';

const HomeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
];
export default HomeRoutes;
