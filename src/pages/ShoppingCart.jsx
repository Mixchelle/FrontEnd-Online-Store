import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ShoppingCart extends Component {
  render() {
    const getItem = JSON.parse(localStorage.getItem('item'));
    const getItemFromDetails = JSON.parse(localStorage.getItem('itemFromDetails'));
    return (
      <section>
        <h2 className="shopping-cart">
          Carrinho de compras
        </h2>
        <div>
          { getItem !== null
            ? (
              getItem.map(({ id, title, thumbnail, price }) => (
                <div key={ id }>
                  <Card
                    style={ {
                      width: '12rem',
                    } }
                  >
                    <img src={ thumbnail } alt={ title } />
                    <CardBody>
                      <CardTitle tag="h5" data-testid="shopping-cart-product-name">
                        { title }
                      </CardTitle>
                      <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                      >
                        { `R$ ${price},00` }
                      </CardSubtitle>
                      <CardText data-testid="shopping-cart-product-quantity">
                        1
                      </CardText>
                    </CardBody>
                  </Card>
                </div>))
            )
            : (
              <p
                className="empty-cart"
                data-testid="shopping-cart-empty-message"
              >
                Seu carrinho está vazio
              </p>)}
        </div>
        <div>
          { getItemFromDetails !== null
            ? (
              getItemFromDetails.map(({ id, title, thumbnail, price }) => (
                <div key={ id }>
                  <Card
                    style={ {
                      width: '11rem',
                    } }
                  >
                    <img src={ thumbnail } alt={ title } />
                    <CardBody>
                      <CardTitle tag="h5" data-testid="shopping-cart-product-name">
                        { title }
                      </CardTitle>
                      <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h5"
                      >
                        { `R$ ${price},00` }
                      </CardSubtitle>
                      <CardText data-testid="shopping-cart-product-quantity">
                        1
                      </CardText>
                    </CardBody>
                  </Card>
                </div>))
            )
            : null}
          {/* // <p
            //   className="empty-cart"
            //   data-testid="shopping-cart-empty-message"
            // >
            //   Seu carrinho está vazio
            // </p>) */}
        </div>
      </section>
    );
  }
}

export default ShoppingCart;
