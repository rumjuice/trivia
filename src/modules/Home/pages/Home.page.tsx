import { observer } from 'mobx-react-lite';
import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../bootstrap/Store.bootstrap';
import { Card } from '../../../components';
import { useGetQuiz } from '../../Quiz/mutations';
import { Difficulty, ResponseCode } from '../../Quiz/Quiz.types';
import { handleQuizError } from '../../Quiz/Quiz.utils';
import { Button, HomeContent, HomeHeader } from '../components';

const HomePage: FC = observer(() => {
  const navigate = useNavigate();
  const { setQuiz, error, getCategories, categories } = useStore().quiz;
  const [categoryId, setCategoryId] = useState<number>();
  const [difficulty, setDifficulty] = useState<Difficulty>();

  const getQuiz = useGetQuiz();

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  const handleBegin = useCallback(async () => {
    try {
      const quiz = await getQuiz.mutateAsync({
        categoryId: categoryId,
        difficulty: difficulty,
        type: 'boolean',
        amount: 10,
      });
      if (quiz.results.length > 0) {
        setQuiz(quiz.results);
        navigate('/quiz');
      } else if (quiz.response_code !== ResponseCode.SUCCESS) {
        const err = handleQuizError(quiz.response_code);
        alert(err);
      }
    } catch (error) {
      alert(error.message);
    }
  }, [navigate, getQuiz]);

  return (
    <Card
      header={<HomeHeader />}
      footer={
        <Button
          text="Begin"
          onClick={handleBegin}
          isLoading={getQuiz.isPending}
        />
      }>
      <HomeContent
        categories={categories}
        onSelectCategory={setCategoryId}
        onSelectDifficulty={setDifficulty}
      />
    </Card>
  );
});

export default HomePage;
