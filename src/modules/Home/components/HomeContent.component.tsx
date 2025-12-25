import { ReactElement } from 'react';
import { Category, Difficulty } from '../../Quiz/Quiz.types';

const HomeContent = ({
  categories,
  onSelectCategory,
  onSelectDifficulty,
}: {
  categories?: Category[];
  onSelectCategory: (categoryId: number) => void;
  onSelectDifficulty: (difficulty: Difficulty) => void;
}): ReactElement => {
  return (
    <div className="flex flex-col gap-4 text-center font-medium">
      <div className="flex gap-2">
        <select
          className="flex-1 p-2 rounded-md border border-gray-300"
          onChange={(e) => onSelectCategory(Number(e.target.value))}>
          <option value="">Any Category</option>
          {categories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <select
          className="p-2 rounded-md border border-gray-300"
          onChange={(e) => onSelectDifficulty(e.target.value as Difficulty)}>
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100% ?</p>
      </div>
    </div>
  );
};

export default HomeContent;
