import { createSelector } from 'reselect';

const allPlayersSelector = state => state.playerState.allPlayers;

export const listSelector = createSelector(
  allPlayersSelector,
  players => Object.values(players)
);
