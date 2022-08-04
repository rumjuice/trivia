import { FC, memo } from 'react';

interface Props {
  onClick(): void;
}

const HomeButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      className="font-medium text-sky-900 w-full transition-all hover:bg-sky-100 duration-300 py-2"
      onClick={onClick}>
      BEGIN
    </button>
  );
};

export default memo(HomeButton);
