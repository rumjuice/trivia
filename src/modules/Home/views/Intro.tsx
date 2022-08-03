import { FC, useCallback, useEffect, useState } from 'react';
import { Card } from '../../../components';
import { HomeButton, HomeContent } from '../components';
import { getQuiz } from '../repos';
import { Quiz } from '../Types';

const Intro: FC = () => {
  const [quiz, setQuiz] = useState<Quiz[]>();

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = useCallback(async () => {
    try {
      const data = await getQuiz();
      setQuiz(data.results);
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <Card
      header="Welcome to the Trivia Challenge!"
      footer={<HomeButton onClick={() => null} />}>
      <HomeContent />
    </Card>
  );
};

export default Intro;
