import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <div>
            <Route exact path="/" component={ Search } />
            <Route exact path="/cart" component={ ShoppingCart } />
          </div>
        </Switch>
      </main>
    </div>
  );
}

export default App;
