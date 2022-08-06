import { FC, memo } from 'react';
import { escape } from '../Quiz.utils';

interface Props {
  question: string;
  questionNo: number;
  total: number;
}
const QuizContent: FC<Props> = ({ question, questionNo, total }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center border-2 border-sky-900 px-4 py-8 text-lg">
        {escape(question)}
      </div>
      <div className="text-sm">{`${questionNo} of ${total}`}</div>
    </div>
  );
};

export default memo(QuizContent);
