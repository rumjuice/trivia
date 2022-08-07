import { decode } from 'html-entities';
import { ReactElement } from 'react';

interface Props {
  question: string;
}

const QuizContent = ({ question }: Props): ReactElement => {
  return (
    <div className="text-center font-medium text-lg">{decode(question)}</div>
  );
};

export default QuizContent;
