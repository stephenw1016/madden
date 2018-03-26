import * as types from "./types";

const playersState = {
  allPlayers: {}
};

const players = (state = playersState, action ) => {
  switch (action.type) {
    case types.LOAD_ALL_PLAYERS: {
      return state;
    }
    case types.RECEIVE_ALL_PLAYERS: {
      return { ...state, allPlayers: action.players };
    }
    case types.REQUEST_ALL_PLAYERS: {
      return state;
    }
    default: {
      return state;
    }
  }
};

const playersReducer = players;

export default playersReducer;
