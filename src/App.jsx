import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={ Search } />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
