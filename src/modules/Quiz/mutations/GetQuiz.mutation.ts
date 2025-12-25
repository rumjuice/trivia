import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { GetQuizParams, GetQuizResponse } from '../Quiz.types';
import quizRepo from '../repos';

const useGetQuiz = (): UseMutationResult<
  GetQuizResponse,
  Error,
  GetQuizParams
> =>
  useMutation({
    mutationFn: async (params: GetQuizParams) => await quizRepo.get(params),
  });

export { useGetQuiz };
