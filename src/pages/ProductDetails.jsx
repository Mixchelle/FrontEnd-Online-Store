import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends Component {
  state = {
    productInfos: [],
  };

  componentDidMount() {
    this.getProductInfos();
  }

  getProductInfos = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await api.getProductById(id);
    console.log(product);
    this.setState({ productInfos: product });
  };

  render() {
    const { productInfos } = this.state;
    return (
      <div>
        <div>
          <h2
            data-testid="product-detail-name"
            className="title"
          >
            { productInfos.title }
          </h2>
          <img
            data-testid="product-detail-image"
            src={ productInfos.thumbnail }
            alt={ productInfos.title }
          />
          <h3 data-testid="product-detail-price">{ productInfos.price }</h3>
          <Link to="/cart" data-testid="shopping-cart-button">
            <button
              className="second-cart-button"
              type="button"
              data-testid="shopping-cart-button"
            >
              Ir para o carrinho
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};

export default ProductDetails;
