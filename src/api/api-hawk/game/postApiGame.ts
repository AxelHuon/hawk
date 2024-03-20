/**
 * This file sets up a custom hook using React Query to perform a POST request to a game creation endpoint in a gaming API.
 * The hook, `usePostGameMutation`, allows components within a React application to create new game entries by invoking
 * this mutation with the necessary request body.
 *
 * The core functionality revolves around the `postApiGame` function, which asynchronously sends a POST request using
 * the `axiosHawkInstance`. This instance is a pre-configured Axios client with specific baseURL, headers, or interceptors
 * already set up for the application's needs. The `postApiGame` function takes an object conforming to the `PostApiGameBodyRequest`
 * type as its argument and returns a promise that resolves to an object of type `PostApiGameBodyResponse`, which contains
 * the response from the API after creating the game.
 *
 * Errors in the request process are caught and re-thrown, allowing error handling to be managed by the consuming components
 * or hooks. The `usePostGameMutation` hook abstracts the mutation's configuration and provides an easy-to-use interface
 * for components to trigger the game creation process, handle loading states, and respond to the success or failure of
 * the operation.
 */

import { PostApiGameBodyRequest, PostApiGameBodyResponse } from '@/api/api-hawk/game/game';
import { useMutation } from '@tanstack/react-query';
import { axiosHawkInstance } from '@/api/AxiosInstance';

const postApiGame = async (
  bodyRequest: PostApiGameBodyRequest,
): Promise<PostApiGameBodyResponse> => {
  try {
    const response = await axiosHawkInstance.post<PostApiGameBodyResponse>(
      '/game/create',
      bodyRequest,
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const usePostGameMutation = () => {
  return useMutation<PostApiGameBodyResponse, unknown, PostApiGameBodyRequest>({
    mutationFn: postApiGame,
  });
};
