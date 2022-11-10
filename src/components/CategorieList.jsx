import React from 'react';
import * as api from '../services/api';

class CategorieList extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  };

  render() {
    const { categories } = this.state;
    return (
      <div className="categories">
        <p className="category-title">Categorias:</p>
        { categories.map((category) => (
          <label
            htmlFor="category"
            data-testid="category"
            key={ category.id }
          >
            <input
              type="radio"
              name="category"
              className="category-items"
              id={ category.name }
              value={ category.name }
            />
            { category.name }
          </label>)) }
      </div>
    );
  }
}

export default CategorieList;
