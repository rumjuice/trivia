import { ReactElement } from 'react';
import { Button } from '../../Home/components';

interface Props {
  onClick(text: string): void;
}

const QuizButton = ({ onClick }: Props): ReactElement => {
  return (
    <div className="flex gap-4 w-full">
      <Button text="False" type="false" onClick={() => onClick('False')} />
      <Button text="True" type="true" onClick={() => onClick('True')} />
    </div>
  );
};

export default QuizButton;
