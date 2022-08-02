import { memo, ReactElement } from 'react';

const HomeContent = (): ReactElement => {
  return (
    <div className="flex flex-col gap-4">
      <div>You will be presented with 10 True or False questions.</div>
      <div>Can you score 100%?</div>
    </div>
  );
};

export default memo(HomeContent);
