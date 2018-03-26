import axios from 'axios';

import { requestAllPlayers, receiveAllPlayers } from './actions';

const loadAllPlayers = () => (dispatch) => {
  dispatch(requestAllPlayers());

  axios.get('./data/player-ratings.json').then(response => {
    dispatch(receiveAllPlayers(response.data.docs));
  });
};

export {
  loadAllPlayers
}
