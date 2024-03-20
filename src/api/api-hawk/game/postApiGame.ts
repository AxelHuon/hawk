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
    console.log(bodyRequest);
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
