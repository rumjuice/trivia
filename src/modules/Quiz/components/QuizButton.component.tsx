import { FC, memo } from 'react';

interface Props {
  onClick(text: string): void;
}

const QuizButton: FC<Props> = ({ onClick }) => {
  return (
    <div className="flex w-full">
      <button
        className="font-medium text-red-900 w-full transition-all hover:bg-red-100 duration-300 py-2"
        onClick={() => onClick('False')}>
        False
      </button>
      <button
        className="font-medium text-green-900 w-full transition-all hover:bg-green-100 duration-300 py-2"
        onClick={() => onClick('True')}>
        True
      </button>
    </div>
  );
};

export default memo(QuizButton);
