import { ReactElement } from 'react';

interface Props {
  text: string;
  type?: 'true' | 'false';
  onClick(): void;
}

const Button = ({ text, type, onClick }: Props): ReactElement => {
  switch (type) {
    case 'true':
      return (
        <button
          className="bg-green-700 w-full text-white font-medium rounded-md shadow-md duration-150 py-3 hover:bg-green-800"
          onClick={onClick}>
          {text}
        </button>
      );
    case 'false':
      return (
        <button
          className="bg-red-700 w-full text-white font-medium rounded-md shadow-md duration-150 py-3 hover:bg-red-800"
          onClick={onClick}>
          {text}
        </button>
      );
    default:
      return (
        <button
          className="bg-black w-full text-white font-medium rounded-md shadow-md duration-150 py-3 hover:bg-neutral-900"
          onClick={onClick}>
          {text}
        </button>
      );
  }
};

export default Button;
