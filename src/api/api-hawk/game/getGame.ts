import { axiosHawkInstance } from '@/api/AxiosInstance';
import { GetApiGames } from '@/api/api-hawk/game/game';

export const getGameByUserUiid = async (uiidUser: string): Promise<GetApiGames[]> => {
  try {
    const response = await axiosHawkInstance.get<any>(`/game/user/${uiidUser}}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
