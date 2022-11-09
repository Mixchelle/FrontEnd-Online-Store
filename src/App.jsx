import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './components/Message';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          <Route exact path="/" component={ Search } />
        </Switch>
      </main>
    </div>
  );
}

export default App;
