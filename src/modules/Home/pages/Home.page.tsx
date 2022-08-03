import { FC } from 'react';
import { Card } from '../../../components';
import { HomeButton, HomeContent } from '../components';

const Intro: FC = () => {
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

  return (
    <Card
      header="Welcome to the Trivia Challenge!"
      footer={<HomeButton onClick={() => null} />}>
      <HomeContent />
    </Card>
  );
};

export default Intro;
