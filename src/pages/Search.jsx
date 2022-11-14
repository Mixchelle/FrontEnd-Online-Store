import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import CategorieList from '../components/CategorieList';
import * as api from '../services/api';
// import ShoppingCart from './ShoppingCart';
class Search extends Component {
  state = {
    frase: '',
    produto: [],
    carregar: true,
    newArray: [],
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  insertStorage = (event) => {
    const { id, price, title, thumbnail } = event;

    this.setState((prevState) => ({
      newArray: [...prevState.newArray, { id, price, title, thumbnail }],
    }), () => {
      const { newArray } = this.state;
      localStorage.setItem('item', JSON.stringify(newArray));
    });
  };

  fetchSearch = async (frase) => {
    const produtos = await api.getProductsFromCategoryAndQuery(frase, '');
    if (produtos.length === 0) {
      this.setState({
        carregar: true,
      });
    } else {
      this.setState({
        carregar: false,
        produto: produtos.results,
      });
    }
  };

  async fetchApi() {
    const { frase } = this.state;
    const produtos = await api.getProductsFromCategoryAndQuery('', frase);
    if (produtos.results.length === 0) {
      this.setState({
        carregar: true,
      });
    } else {
      this.setState({
        carregar: false,
        produto: produtos.results,
      });
    }
  }

  render() {
    const { produto, carregar } = this.state;
    const message = <p className="nothing">Nenhum produto foi encontrado</p>;
    return (
      <div className="organize">
        <CategorieList
          fetchSearch={ this.fetchSearch }
        />
        <div className="form-message">
          <Message />
          <form className="form">
            <input
              className="input-search"
              id="frase"
              name="frase"
              data-testid="query-input"
              type="text"
              onChange={ this.handleChange }
            />
            <div className="button">
              <button
                id="button"
                name="button"
                data-testid="query-button"
                type="button"
                onClick={ () => this.fetchApi() }
              >
                Buscar
              </button>
            </div>
            { carregar ? message : produto
              .map((object, { id, title, thumbnail, price }) => (
                <div key={ id }>
                  <Link
                    to={ `productDetails/${id}` }
                    key={ id }
                    data-testid="product-detail-link"
                  >
                    <div
                      key={ id }
                      data-testid="product"
                      className="produtos"
                    >
                      <p className="title">{title}</p>
                      <img src={ thumbnail } alt={ title } />
                      <p>{ price }</p>
                    </div>
                  </Link>
                  <button
                    data-testid="product-add-to-cart"
                    type="button"
                    onClick={ () => this.insertStorage(object) }
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              ))}
          </form>
        </div>
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
