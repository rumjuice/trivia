import { ResponseCode } from './Quiz.types';

export function handleQuizError(response_code: ResponseCode): string {
  switch (response_code) {
    case ResponseCode.NO_RESULTS:
      return 'No questions available for the selected category and difficulty.';
    case ResponseCode.SUCCESS:
      return '';
    default:
      return 'Unknown error. Please try again.';
  }
}
