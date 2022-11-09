import React, { Component } from 'react';
import Message from '../components/Message';
import CategorieList from '../components/CategorieList';

class Search extends Component {
  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
          />
        </form>
        <h2>
          <Message />
        </h2>
        <CategorieList />
      </div>
    );
  }
}

export default Search;
