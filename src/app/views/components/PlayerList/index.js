// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { playerSelectors } from '../../../state/stores/players';

type Props = {
  players: Object
};

function PlayerList(props: Props) {
  return (
    <ul>
      {props.players.map((player) => (
        <li key={player.primaryKey}>{`${player.firstName} ${player.lastName}`}</li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return { players: playerSelectors.listSelector(state) };
};


export default connect(
  mapStateToProps
)(PlayerList);
