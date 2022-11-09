import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
// import ShoppingCart from './ShoppingCart';

class Search extends Component {
  render() {
    return (
      <div>
        <h2>
          <Message />
        </h2>
        <form>
          <label htmlFor="inputId">
            <input
              className="input-search"
              type="text"
              id="inputId"
              name="inputId"
            />
          </label>
        </form>
        <div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <button className="cart-button" type="button">
              Ir para o carrinho
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Search;
