import { observer } from 'mobx-react-lite';
import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components';
import { useStores } from '../../../stores/Bootstrap.store';
import { ResultsButton, ResultsContent } from '../components';

const ResultsPage: FC = observer(() => {
  const { quiz, clear } = useStores().quiz;
  const navigate = useNavigate();
  const [score, setScore] = useState<number>();

  const calculateScore = useCallback(() => {
    const _score = quiz.reduce((p, c) => p + (c.is_correct ? 1 : 0), 0);
    setScore(_score);
  }, [quiz]);

  useEffect(() => {
    if (quiz.length === 0) navigate('/', { replace: true });
    else calculateScore();
  }, [calculateScore, navigate, quiz.length]);

  const handleFinish = useCallback(() => {
    clear();
    navigate('/', { replace: true });
  }, [clear, navigate]);

  return (
    <Card
      header={`You scored: ${score} / ${quiz.length}`}
      footer={<ResultsButton onClick={handleFinish} />}>
      <div className="flex flex-col divide-y-2 divide-sky-100 divide-dotted">
        {quiz.map((q) => (
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
