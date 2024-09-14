import React from 'react';
import Game from '../src/Components/Game/Game';
import { Provider } from 'react-redux';
import store from '../src/Redux/store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Memory Match Game</h1>
      <Game />
    </div>
  </Provider>
);

export default App;
