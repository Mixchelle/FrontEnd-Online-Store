import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>
    );
  }
}

export default Message;
