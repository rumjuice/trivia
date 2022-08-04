import { observer } from 'mobx-react-lite';
import { FC, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components';
import { useStores } from '../../../stores/Bootstrap.store';
import { HomeButton, HomeContent } from '../components';

const HomePage: FC = observer(() => {
  // const [quiz, setQuiz] = useState<Quiz[]>();

  // useEffect(() => {
  //   fetchQuiz();
  // }, []);

  // const fetchQuiz = useCallback(async () => {
  //   try {
  //     const data = await repo.get();
  //     setQuiz(data.results);
  //   } catch (error) {
  //     alert(error);
  //   }
  // }, []);
  const navigate = useNavigate();
  const { getQuiz, quiz, error, clear } = useStores().quiz;

  const handleBegin = useCallback(() => {
    clear();
    getQuiz();
  }, []);

  useEffect(() => {
    if (quiz.length > 0) navigate('/quiz');
  }, [quiz]);

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <Card
      header="Welcome to the Trivia Challenge!"
      footer={<HomeButton onClick={handleBegin} />}>
      <HomeContent />
    </Card>
  );
});

export default HomePage;
