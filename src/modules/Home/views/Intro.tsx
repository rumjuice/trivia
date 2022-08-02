import { FC } from 'react';
import { Card } from '../../../components';
import { HomeButton, HomeContent } from '../components';

const Intro: FC = () => {
  return (
    <Card
      header="Welcome to the Trivia Challenge!"
      footer={<HomeButton onClick={() => null} />}>
      <HomeContent />
    </Card>
  );
};

export default Intro;
