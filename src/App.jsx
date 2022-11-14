import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <>
            <Route exact path="/" component={ Search } />
            <Route exact path="/cart" component={ ShoppingCart } />
            <Route exact path="/productDetails/:id" component={ ProductDetails } />
          </>
        </Switch>
      </main>
    </div>
  );
}

export default App;
