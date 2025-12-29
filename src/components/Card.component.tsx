import { FC, ReactElement } from 'react';

interface Props {
  header: ReactElement | string;
  children: ReactElement;
  footer: ReactElement;
}

const Card: FC<Props> = ({ header, children, footer }) => {
  return (
    <div className="flex flex-col gap-8 w-full 2xl:w-1/3 xl:w-2/5 md:w-1/2 sm:w-full rounded-md shadow-md bg-white m-auto p-8">
      <header>{header}</header>
      <div>{children}</div>
      <footer>{footer}</footer>
    </div>
  );
};

export default Card;
