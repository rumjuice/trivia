import ky from 'ky';
import { Category, GetQuizParams, Quiz } from '../Quiz.types';

/**
 * Get quiz questions.
 *
 * @returns quiz[]
 */
async function get(params: GetQuizParams): Promise<{ results: Quiz[] }> {
  return await ky
    .get('https://opentdb.com/api.php', {
      searchParams: {
        amount: params.amount?.toString() ?? '10',
        type: params.type ?? 'boolean',
        ...(params.difficulty && {
          difficulty: params.difficulty,
        }),
        ...(params.categoryId && {
          category: params.categoryId.toString(),
        }),
      },
    })
    .json();
}
/**
 * Get quiz questions.
 *
 * @returns quiz[]
 */
async function getCategories(): Promise<{ trivia_categories: Category[] }> {
  return await ky.get('https://opentdb.com/api_category.php').json();
}

export { get, getCategories };
