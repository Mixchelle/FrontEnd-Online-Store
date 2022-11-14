import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { getProductById } from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

class ShoppingCart extends Component {
  state = {
    productList: [],
  };

  async componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    const products = JSON.parse(localStorage.getItem('item'));
    if (products !== null) {
      products.forEach(async (element) => {
        const callLocal = await getProductById(element);
        this.setState((prevState) => ({
          productList: [...prevState.productList, callLocal],
        }));
      });
      const { productList } = this.state;
      console.log(productList.length);
    }
  };

  render() {
    const { productList } = this.state;
    return (
      <section>
        <h2 className="shopping-cart">
          {' '}
          Carrinho de compras
          {
            console.log(productList)
          }
        </h2>
        <h3>
          { (productList.length === 0)
            ? (
              <p
                className="empty-cart"
                data-testid="shopping-cart-empty-message"
              >
                Seu carrinho está vazio
              </p>) : null}
        </h3>
        <div>
          {
            productList.map((list) => (
              <div key={ list.id }>
                <Card
                  style={ {
                    width: '18rem',
                  } }
                >
                  <img src={ list.thumbnail } alt={ list.title } />
                  <CardBody>
                    <CardTitle tag="h5" data-testid="shopping-cart-product-name">
                      { list.title }
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      { `R$ ${list.price},00` }
                    </CardSubtitle>
                    <CardText data-testid="shopping-cart-product-quantity">
                      1
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default ShoppingCart;
