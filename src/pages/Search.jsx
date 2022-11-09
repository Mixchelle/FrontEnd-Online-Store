import React, { Component } from 'react';
import Message from '../components/Message';

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
      </div>
    );
  }
}

export default Search;
