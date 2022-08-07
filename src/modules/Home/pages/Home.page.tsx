import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../bootstrap/Store.bootstrap';
import { Card } from '../../../components';
import { Button, HomeContent, HomeHeader } from '../components';

const HomePage: FC = observer(() => {
  const navigate = useNavigate();
  const { getQuiz, quiz, error, clear } = useStore().quiz;

  useEffect(() => {
    if (quiz.length > 0) navigate('/quiz');
  }, [navigate, quiz]);

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  const handleBegin = () => {
    clear();
    getQuiz();
  };

  return (
    <Card
      header={<HomeHeader />}
      footer={<Button text="Begin" onClick={handleBegin} />}>
      <HomeContent />
    </Card>
  );
});

export default HomePage;
