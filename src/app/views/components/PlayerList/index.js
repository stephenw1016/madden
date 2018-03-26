import React from 'react';
import { connect } from 'react-redux';

import { playerSelectors } from "../../../state/stores/players";

class PlayerList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.players.map(player => (
            <li key={player.primaryKey}>{`${player.firstName} ${player.lastName}`}</li>
          ))
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return { players: playerSelectors.listSelector(state) };
};


export default connect(
  mapStateToProps
)(PlayerList);
