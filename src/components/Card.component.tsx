import { FC, ReactElement } from 'react';

interface Props {
  header: ReactElement | string;
  children: ReactElement;
  footer: ReactElement;
}

const Card: FC<Props> = ({ header, children, footer }) => {
  return (
    <div className="flex flex-col gap-8 w-full xl:w-1/4 lg:w-1/3 sm:w-1/2  rounded-md shadow-md bg-white m-auto p-8">
      <header>{header}</header>
      <div>{children}</div>
      <footer>{footer}</footer>
    </div>
  );
};

export default Card;
