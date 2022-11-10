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
      <div>
        <p>Categorias:</p>
        { categories.map((category) => (
          <label
            htmlFor={ category.name }
            data-testid="category"
            key={ category.id }
          >
            <input
              type="radio"
              name="category"
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
