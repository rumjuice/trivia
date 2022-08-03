import ky from 'ky';
import { Quiz } from '../Types.home';

/**
 * Get quiz questions.
 *
 * @returns
 */
async function get(): Promise<{ results: Quiz[] }> {
  return await ky
    .get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .json();
}

export { get };
