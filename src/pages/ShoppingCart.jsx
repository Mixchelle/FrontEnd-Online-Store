import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h2 className="shopping-cart">
          {' '}
          Carrinho de compras
        </h2>
        <p
          className="empty-cart"
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </p>
      </div>
    );
  }
}

export default ShoppingCart;
