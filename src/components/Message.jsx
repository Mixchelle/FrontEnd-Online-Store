import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="message" data-testid="home-initial-message">
        <h2>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default Message;
