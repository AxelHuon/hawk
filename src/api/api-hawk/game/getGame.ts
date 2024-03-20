// This module provides a function to fetch games associated with a specific user by their unique identifier (UUID).
// It utilizes a custom Axios instance configured for interacting with a specific backend (referred to as axiosHawkInstance).
// The function getGameByUserUiid is an asynchronous operation, expecting a user's UUID as input,
// and it returns a promise that resolves to an array of games (GetApiGames[]) associated with the provided user UUID.

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
