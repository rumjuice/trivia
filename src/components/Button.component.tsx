import { ReactElement } from 'react';

interface Props {
  text: string;
  type?: 'true' | 'false';
  isLoading?: boolean;
  onClick(): void;
}

const Button = ({ text, type, isLoading, onClick }: Props): ReactElement => {
  switch (type) {
    case 'true':
      return (
        <button
          className="bg-emerald-700 w-full text-white font-semibold rounded-md shadow-md duration-150 py-3 hover:bg-emerald-800"
          onClick={onClick}>
          {text}
        </button>
      );
    case 'false':
      return (
        <button
          className="bg-rose-800 w-full text-white font-semibold rounded-md shadow-md duration-150 py-3 hover:bg-rose-900"
          onClick={onClick}>
          {text}
        </button>
      );
    default:
      return (
        <button
          className="bg-black w-full text-white font-semibold rounded-md shadow-md duration-150 py-3 hover:bg-neutral-900"
          onClick={onClick}
          disabled={isLoading}>
          {isLoading ? 'Please wait..' : text}
        </button>
      );
  }
};

export default Button;
