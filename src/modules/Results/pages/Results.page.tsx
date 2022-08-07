import { observer } from 'mobx-react-lite';
import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../bootstrap/Store.bootstrap';
import { Card } from '../../../components';
import { Button } from '../../Home/components';
import { Quiz } from '../../Quiz/Quiz.types';
import { ResultsContent, ResultsHeader } from '../components';

const ResultsPage: FC = observer(() => {
  const { quiz, clear } = useStore().quiz;
  const navigate = useNavigate();
  const [score, setScore] = useState<number>();

  const calculateScore = useCallback(() => {
    const _score = quiz.reduce(
      (p: number, c: Quiz) => p + (c.is_correct ? 1 : 0),
      0,
    );
    setScore(_score);
  }, [quiz]);

  useEffect(() => {
    if (quiz.length === 0) navigate('/', { replace: true });
    else calculateScore();
  }, [calculateScore]);

  const handleFinish = () => {
    clear();
    navigate('/', { replace: true });
  };

  return (
    <Card
      header={<ResultsHeader score={score ?? 0} length={quiz.length} />}
      footer={<Button text="Play Again?" onClick={handleFinish} />}>
      <div className="flex flex-col gap-2">
        {quiz.map((q: Quiz) => (
          <ResultsContent
            key={q.question}
            question={q.question}
            isCorrect={q.is_correct}
          />
        ))}
      </div>
    </Card>
  );
});

export default ResultsPage;
