import { RouteObject } from 'react-router-dom';
import ResultsPage from './pages/Results.page';

const ResultsRoutes: RouteObject[] = [
  {
    path: '/results',
    element: <ResultsPage />,
  },
];
export default ResultsRoutes;
