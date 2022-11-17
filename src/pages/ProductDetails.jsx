import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Form from '../components/Form';

class ProductDetails extends Component {
  state = {
    productInfos: [],
    newArrayDetails: [],
  };

  componentDidMount() {
    this.getProductInfos();
  }

  getProductInfos = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await api.getProductById(id);
    this.setState({ productInfos: product });
  };

  insertStorageProdutDetails = () => {
    const { productInfos, newArrayDetails } = this.state;
    this.setState({
      newArrayDetails: newArrayDetails.push(productInfos),
    });
    localStorage.setItem('itemFromDetails', JSON.stringify(newArrayDetails));
    localStorage.setItem(productInfos.id, JSON.stringify(avaliacoes));
    // this.setState((prevState) => ({
    //   newArrayDetails: [...prevState.newArrayDetails, productInfos],
    // }), () => {
    //   const { newArrayDetails } = this.state;
    //   localStorage.setItem('item', JSON.stringify(newArrayDetails));
    // });
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
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ this.insertStorageProdutDetails }
          >
            Adicionar ao carrinho
          </button>
          <Link to="/cart">
            <button
              className="second-cart-button"
              type="button"
              data-testid="shopping-cart-button"
            >
              Ir para o carrinho
            </button>
          </Link>
        </div>
        <Form
          productInfos={ productInfos.id }
        />
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
