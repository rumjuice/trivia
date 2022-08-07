import { ReactElement } from 'react';

interface Props {
  score: number;
  length: number;
}
const ResultsHeader = ({ score, length }: Props): ReactElement => {
  return (
    <h1 className="text-2xl text-center font-bold">
      {`Your score: ${score} / ${length} `}
    </h1>
  );
};

export default ResultsHeader;
