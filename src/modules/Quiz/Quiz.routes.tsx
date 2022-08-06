import { RouteObject } from 'react-router-dom';
import QuizPage from './pages/Quiz.page';

const QuizRoutes: RouteObject[] = [
  {
    path: '/quiz',
    element: <QuizPage />,
  },
];
export default QuizRoutes;
