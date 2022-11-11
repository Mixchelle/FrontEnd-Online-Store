import React from 'react';
import PropTypes from 'prop-types';
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
    const { fetchSearch } = this.props;
    return (
      <div className="categories">
        <p className="category-title">Categorias:</p>
        { categories.map((category) => (
          <label
            htmlFor={ category.name }
            data-testid="category"
            key={ category.id }
          >
            <input
              type="radio"
              name="category"
              className="category-items"
              id={ category.name }
              value={ category.name }
              onClick={ () => fetchSearch(category.id) }
            />
            { category.name }
          </label>)) }
      </div>
    );
  }
}
CategorieList.defaultProps = {
  fetchSearch: <p>Teste</p>,
};
CategorieList.propTypes = {
  fetchSearch: PropTypes.func,
};
export default CategorieList;
