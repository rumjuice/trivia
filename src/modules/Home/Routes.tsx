import { RouteObject } from 'react-router-dom';
import Intro from './views';

const HomeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Intro />,
  },
];
export default HomeRoutes;
