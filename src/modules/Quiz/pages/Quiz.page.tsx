import { observer } from 'mobx-react-lite';
import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components';
import { useStores } from '../../../stores/Bootstrap.store';
import { Quiz } from '../../Home/Types.home';
import { QuizButton, QuizContent } from '../components';

const QuizPage: FC = observer(() => {
  const navigate = useNavigate();
  const { quiz, setAnswer } = useStores().quiz;
  const [currQuiz, setCurrQuiz] = useState<Quiz>();
  const [quizNo, setQuizNo] = useState<number>(0);

  useEffect(() => {
    if (quiz.length === 0) navigate('/', { replace: true });
    else setCurrQuiz(quiz[quizNo]);
  }, [navigate, quiz, quizNo]);

  useEffect(() => {
    setCurrQuiz(quiz[quizNo]);
  }, [quiz, quizNo]);

  const handleAnswer = useCallback(
    (answer: string) => {
      setAnswer(answer, quizNo);

      if (quizNo === quiz.length - 1) {
        console.log('end');
        navigate('/results');
      } else setQuizNo((_no) => _no + 1);
    },
    [navigate, quiz.length, quizNo, setAnswer],
  );

  return currQuiz ? (
    <Card
      header={currQuiz.category}
      footer={<QuizButton onClick={handleAnswer} />}>
      <QuizContent
        question={currQuiz.question}
        questionNo={quizNo + 1}
        total={quiz.length}
      />
    </Card>
  ) : (
    <></>
  );
});

export default QuizPage;
