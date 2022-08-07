import { ReactElement } from 'react';

interface Props {
  category: string;
  quizNo: number;
  total: number;
}

const QuizHeader = ({ category, quizNo, total }: Props): ReactElement => {
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="text-sm bg-neutral-200 py-2 px-4">{category}</div>
      <div className="text-sm text-neutral-500 flex-none">{`${quizNo} / ${total}`}</div>
    </div>
  );
};

export default QuizHeader;
