import { FC, memo } from 'react';
import { escape } from '../../Quiz/Quiz.utils';
import CheckIcon from './CheckIcon.component';
import CrossIcon from './CrossIcon.component';

interface Props {
  question: string;
  isCorrect?: boolean;
}
const ResultsContent: FC<Props> = ({ question, isCorrect }) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <div>
        {isCorrect ? (
          <CheckIcon className="fill-green-600" />
        ) : (
          <CrossIcon className="fill-red-600" />
        )}
      </div>
      <div className="text-sm">{escape(question)}</div>
    </div>
  );
};

export default memo(ResultsContent);
