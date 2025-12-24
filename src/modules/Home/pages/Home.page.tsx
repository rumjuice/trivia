import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../bootstrap/Store.bootstrap';
import { Card } from '../../../components';
import { Button, HomeContent, HomeHeader } from '../components';

const HomePage: FC = observer(() => {
  const navigate = useNavigate();
  const {
    getQuiz,
    quiz,
    error,
    getCategories,
    categories,
    setCategory,
    setDifficulty,
  } = useStore().quiz;

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (quiz.length > 0) navigate('/quiz');
  }, [navigate, quiz]);

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  const handleBegin = () => {
    getQuiz();
  };

  return (
    <Card
      header={<HomeHeader />}
      footer={<Button text="Begin" onClick={handleBegin} />}>
      <HomeContent
        categories={categories}
        onSelectCategory={setCategory}
        onSelectDifficulty={setDifficulty}
      />
    </Card>
  );
});

export default HomePage;
