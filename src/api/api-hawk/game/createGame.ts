import { axiosHawkInstance } from '@/api/AxiosInstance';
import { PostApiGameBodyRequest, PostApiGameBodyResponse } from '@/api/api-hawk/game/game';

const postApiGame = async (
  bodyRequest: PostApiGameBodyRequest,
): Promise<PostApiGameBodyResponse | unknown> => {
  try {
    const response = await axiosHawkInstance.post('/game/create', bodyRequest);
    return response.data;
  } catch (error: unknown) {
    return error;
  }
};
