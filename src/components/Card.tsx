import { FC, memo } from 'react';

interface Props {
  header: string;
  children: JSX.Element;
  footer: JSX.Element;
}

const Card: FC<Props> = ({ header, children, footer }) => {
  return (
    <div className="flex flex-col gap-4 w-full xl:w-1/4 lg:w-1/3 sm:w-1/2 px-4 rounded-md shadow-md bg-white m-auto">
      <header className="text-xl font-bold w-3/4 pt-4">{header}</header>
      <div>{children}</div>
      <footer className="flex justify-center border-t-2">{footer}</footer>
    </div>
  );
};

export default memo(Card);
