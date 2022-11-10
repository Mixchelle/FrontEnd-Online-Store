import React from 'react';
import * as api from '../services/api';

class CategorieList extends React.Component {
  state = {
    categories: [],
    produto: [],
  };

  componentDidMount() {
    this.fetchCategories();
    this.getProduct();
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();

    this.setState({
      categories,
    });
  };

  getProduct = async (categoryId) => {
    const produtos = await api.getProductById(categoryId);
    console.log('prod', produtos.results);

    this.setState({
      produto: produtos.results,
    });
  };

  render() {
    const { categories, produto } = this.state;
    return (
      <div>
        <p>Categorias:</p>
        {categories.map((category) => (
          <label htmlFor="category" data-testid="category" key={ category.id }>
            <input
              type="radio"
              name="category"
              id={ category.name }
              value={ category.name }
              onClick={ () => this.getProduct(category.id) }
            />
            {category.name}
          </label>
        ))}
        <div>
          {produto.map((prod, id) => (
            <div key={ id } data-testid="product" className="produtos">
              <p>{prod.title}</p>
              <img src={ prod.thumbnail } alt={ prod.title } />
              {prod.title}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CategorieList;
