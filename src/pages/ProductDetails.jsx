import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
//   componentDidMount() {
//     const getProductsId = getProductById(id);
//  }

  render() {
    return (
      <div>
        <div>
          <p className="title">{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
          <Link to="/cart" data-testid="shopping-cart-button">
            <button className="second-cart-button" type="button">
              Ir para o carrinho
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
