import { observer } from 'mobx-react-lite';
import { FC, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStores } from '../../../bootstrap/Store.bootstrap';
import { Card } from '../../../components';
import { HomeButton, HomeContent } from '../components';

const HomePage: FC = observer(() => {
  const navigate = useNavigate();
  const { getQuiz, quiz, error, clear } = useStores().quiz;

  useEffect(() => {
    if (quiz.length > 0) navigate('/quiz');
  }, [navigate, quiz]);

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  const handleBegin = useCallback(() => {
    clear();
    getQuiz();
  }, [clear, getQuiz]);

  return (
    <Card
      header="Welcome to the Trivia Challenge!"
      footer={<HomeButton onClick={handleBegin} />}>
      <HomeContent />
    </Card>
  );
});

export default HomePage;
