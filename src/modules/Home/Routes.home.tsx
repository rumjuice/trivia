import { RouteObject } from 'react-router-dom';
import Intro from './pages';

const HomeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Intro />,
  },
];
export default HomeRoutes;
