import { observer } from 'mobx-react-lite';
import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../bootstrap/Store.bootstrap';
import { Card } from '../../../components';
import { QuizButton, QuizContent, QuizHeader } from '../components';
import { Quiz } from '../Quiz.types';

const QuizPage: FC = observer(() => {
  const navigate = useNavigate();
  const { quiz, setAnswer } = useStore().quiz;
  const [currQuiz, setCurrQuiz] = useState<Quiz>();
  const [quizNo, setQuizNo] = useState<number>(0);

  useEffect(() => {
    if (quiz.length === 0) navigate('/', { replace: true });
    else setCurrQuiz(quiz[quizNo]);
  }, []);

  useEffect(() => {
    setCurrQuiz(quiz[quizNo]);
  }, [quiz, quizNo]);

  const handleAnswer = useCallback(
    (answer: string) => {
      setAnswer(answer, quizNo);

      if (quizNo === quiz.length - 1) {
        navigate('/results');
      } else setQuizNo((_no) => _no + 1);
    },
    [quizNo, navigate],
  );

  return currQuiz ? (
    <Card
      header={
        <QuizHeader
          category={currQuiz.category}
          quizNo={quizNo + 1}
          total={quiz.length}
        />
      }
      footer={<QuizButton onClick={handleAnswer} />}>
      <QuizContent question={currQuiz.question} />
    </Card>
  ) : (
    <></>
  );
});

export default QuizPage;
