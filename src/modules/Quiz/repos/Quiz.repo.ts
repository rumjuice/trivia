import ky from 'ky';
import { Quiz } from '../Quiz.types';

/**
 * Get quiz questions.
 *
 * @returns quiz
 */
async function get(): Promise<{ results: Quiz[] }> {
  return await ky
    .get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .json();
}

export { get };
