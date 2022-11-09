import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Search from './components/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={ Search }
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
