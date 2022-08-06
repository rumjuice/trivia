import { FC, memo } from 'react';

interface Props {
  onClick(): void;
}

const ResultsButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      className="font-medium text-sky-900 w-full hover:bg-sky-100 duration-300 py-2"
      onClick={() => onClick()}>
      Play Again?
    </button>
  );
};

export default memo(ResultsButton);
