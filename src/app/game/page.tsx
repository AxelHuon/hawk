'use client';
import React from 'react';
import { useSession } from '../../providers/SessionProviders/SessionContext';
import { useQuery } from '@tanstack/react-query';
import { getGameByUserUiid } from '@/api/api-hawk/game/getGame';
import styled from 'styled-components';

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
    <div>
      {user &&
        games?.map((game) => {
          return (
            <ContainerGame isGm={game.gmId === user.id} key={game.id}>
              {game.id}
            </ContainerGame>
          );
        })}
    </div>
  );
};

export default Game;
