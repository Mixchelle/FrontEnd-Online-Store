import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="message" data-testid="home-initial-message">
        <p>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Message;
