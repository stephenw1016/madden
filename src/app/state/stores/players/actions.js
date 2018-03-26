import * as types from './types';

const requestAllPlayers = () => ({
  type: types.REQUEST_ALL_PLAYERS,
  loading: true
});

const receiveAllPlayers = (players) => ({
  type: types.RECEIVE_ALL_PLAYERS,
  players
});

export {
  requestAllPlayers,
  receiveAllPlayers
};
