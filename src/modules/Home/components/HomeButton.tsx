import { FC, memo } from 'react';

interface Props {
  onClick(): void;
}

const HomeButton: FC<Props> = ({ onClick }) => {
  return (
    <button className="font-medium text-sky-900 w-full" onClick={onClick}>
      BEGIN
    </button>
  );
};

export default memo(HomeButton);
