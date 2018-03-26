import React, { Component } from 'react';
import { render }  from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import PlayerList from './views/components/PlayerList';
import { playerOperations } from './state/stores/players';

import configureStore from "./state/store";

const reduxStore = configureStore();

class App extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    reduxStore.dispatch(playerOperations.loadAllPlayers());
  }

  render () {
    return (
      <Provider store={reduxStore}>
        <HashRouter>
          <main>
            <Switch>
              <Route path="*" component={PlayerList} />
            </Switch>
          </main>
        </HashRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
