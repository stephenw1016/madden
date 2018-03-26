import { createSelector } from 'reselect';

const allPlayersSelector = state => {
  return state.playerState.allPlayers
};

export const listSelector = createSelector(
  allPlayersSelector,
  players => Object.values(players)
);
