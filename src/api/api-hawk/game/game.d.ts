/*Here you can find all interfaces of all request and response of all api routes for game model*/

/*Body request of route "/create/game" */
export interface PostApiGameBodyRequest {
  userId: string;
}

/*Response of route "/game/create" */
export interface PostApiGameBodyResponse {
  gameId: string;
}

/*Interface of route "/game/getAll or /game/user/{uiid} or /game/{uiid}*/
export interface GetApiGames {
  id: string;
  title: string | null;
  status: string;
  users: User[];
  missions: any[];
  gmId: string;
  createdAt: string;
  updatedAt: string;
}
