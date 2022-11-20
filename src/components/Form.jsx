import { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    email: '',
    text: '',
    rating: '',
    formValid: true,
    guardar: [],
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  sendform = () => {
    const { rating, email, text } = this.state;
    if (email === '' || rating === '') {
      this.setState({ formValid: true });
    } else {
      this.setState((prevState) => ({
        guardar: [...prevState.guardar, { email, rating, text }],
        formValid: false,
      }), () => {
        const { guardar } = this.state;
        const { id } = this.props;
        localStorage.setItem(id, JSON.stringify(guardar));
        this.setState({
          email: '',
          rating: 0,
          text: '',
        });
      });
    } this.desableBtn();
  };

  desableBtn = () => {
    const regex = /^\S+@\S+\.\S+$/;
    const { email, rating } = this.state;
    return (
      email !== ''
      && regex.test(email)
      && rating !== ''
    );
  };

  render() {
    const { email, text, formValid } = this.state;
    const ratingLentgh = 5;
    const { id } = this.props;
    const avaliacoesRecebidas = JSON.parse(localStorage.getItem(id));
    return (
      <div>
        <h4>Avalie o produto:</h4>
        <form>
          <div>
            <label htmlFor="input-email">
              Email
              <input
                required
                name="email"
                type="email"
                id="input-email"
                value={ email }
                data-testid="product-detail-email"
                onChange={ this.handleChange }
              />
            </label>
            <div>
              {[...Array(ratingLentgh)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <label
                    htmlFor={ `${ratingValue}-rating` }
                    key={ `${ratingValue}-rating` }
                  >
                    { ratingValue }
                    <input
                      id={ `${ratingValue}-rating` }
                      data-testid={ `${ratingValue}-rating` }
                      type="radio"
                      name="rating"
                      className="input-rating"
                      value={ ratingValue }
                      onChange={ this.handleChange }
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <label htmlFor="textArea">
            <textarea
              type="text"
              id="textArea"
              data-testid="product-detail-evaluation"
              name="text"
              value={ text }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="submit-review-btn"
            onClick={ this.sendform }
          >
            Avaliar
          </button>
        </form>
        { formValid && <p data-testid="error-msg">Campos inválidos</p>}
        <div>
          <h4> Avaliações: </h4>
          {avaliacoesRecebidas === null ? (
            <p>Não há avaliações para esse produto</p>
          ) : (
            <div className="evaluation-user-container">
              {avaliacoesRecebidas.map((avaliacao, i) => (
                <div key={ i }>
                  <p data-testid="review-card-email">{avaliacao.email}</p>
                  <p data-testid="review-card-rating">{avaliacao.rating}</p>
                  <p data-testid="review-card-evaluation">{avaliacao.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
Form.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Form;
