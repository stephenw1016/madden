import { createSelector } from 'reselect';

const allPlayersSelector = state => state.playerState.allPlayers;


export const listSelector = createSelector(
  allPlayersSelector,
  players => {
    const hi = Object.values(players).reduce((teamMap, player) => {
      if (!Object.prototype.hasOwnProperty.call(teamMap, player.team)) {
        teamMap[player.team] = [];
      }

      teamMap[player.team].push(player);

      return teamMap;
    }, {});

    console.log(Object.keys(hi));

    return Object.values(players);
  }
);
