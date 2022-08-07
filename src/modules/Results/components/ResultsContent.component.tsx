import { decode } from 'html-entities';
import { ReactElement } from 'react';
import CheckIcon from './CheckIcon.component';
import CrossIcon from './CrossIcon.component';

interface Props {
  question: string;
  isCorrect?: boolean;
}

const ResultsContent = ({ question, isCorrect }: Props): ReactElement => {
  return (
    <div className="flex items-center gap-4 rounded-md shadow-md p-4">
      <div>
        {isCorrect ? (
          <CheckIcon className="fill-green-600" />
        ) : (
          <CrossIcon className="fill-red-600" />
        )}
      </div>
      <div className="text-sm">{decode(question)}</div>
    </div>
  );
};

export default ResultsContent;
