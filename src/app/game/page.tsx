// This component is responsible for fetching and displaying a list of games associated with the currently logged-in user,
// utilizing the 'useSession' hook for session management and the 'useQuery' hook from '@tanstack/react-query' for data fetching.
// It demonstrates a client-side component, as indicated by 'use client', optimizing for SSR (Server-Side Rendering) frameworks like Next.js.
// The component leverages styled-components for styling, showcasing a conditional styling pattern based on the game's GM status.

'use client';
import React from 'react';
import { useSession } from '@/providers/SessionProviders/SessionContext';
import { useQuery } from '@tanstack/react-query';
import { getGameByUserUiid } from '@/api/api-hawk/game/getGame';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ContainerGame = styled.div<{ isGm: boolean }>``;

const Game: React.FC = () => {
  const { user } = useSession();

  const { data: games } = useQuery({
    queryKey: ['todos', user?.id ?? 'dsqdsqdsdqs'],
    queryFn: async () => {
      return await getGameByUserUiid(user?.id ?? '');
    },
  });

  return (
    <Container>
      {user &&
        games?.map((game) => {
          return (
            <ContainerGame isGm={game.gmId === user.id} key={game.id}>
              {game.id}
            </ContainerGame>
          );
        })}
    </Container>
  );
};

export default Game;
