import { PostApiGameBodyResponse } from '@/api/api-hawk/game/game';
import { ApiError } from '@/api/api-hawk/error';
import { axiosHawkInstance } from '@/api/AxiosInstance';

const postApiGame = async (gameUiid: string): Promise<PostApiGameBodyResponse | ApiError> => {
  try {
    const response = await axiosHawkInstance.get<PostApiGameBodyResponse>(`/game/${gameUiid}`);
    console.log(response);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
