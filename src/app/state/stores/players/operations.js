import axios from 'axios';

import { requestAllPlayers, receiveAllPlayers } from './actions';

const loadAllPlayers = () => (dispatch) => {
  dispatch(requestAllPlayers());

  const allRequests = [
    axios.get('./data/madden-ratings.json'),
    axios.get('./data/madden-ratings-1000.json'),
    axios.get('./data/madden-ratings-2000.json')
  ];

  axios.all(allRequests).then(responses => {
    const allPlayers = responses.reduce((all, response) => {
      return all.concat(response.data.docs);
    }, []);

    dispatch(receiveAllPlayers(allPlayers));
  });
};

export {
  loadAllPlayers
}
