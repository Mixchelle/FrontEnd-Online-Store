import { Component } from 'react';
import PropTypes from 'prop-types';

const objetoForm = {
  email: '',
  text: '',
  rating: '',
};

let ids;
let avaliacoes = [];
if (localStorage.getItem(ids) !== null) {
  avaliacoes = JSON.parse(localStorage.getItem(ids));
}

console.log(avaliacoes);

class Form extends Component {
  state = {
    ...objetoForm,
    formValid: true,
  };

  componentDidMount() {
    this.handleChange();
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  sendform = (event) => {
    const { productInfos } = this.props;
    ids = { productInfos };
    const { rating, email } = this.state;
    if (email === '' || rating === '') {
      event.preventDefault();
      this.setState({ formValid: true });
    } else {
      avaliacoes.push(this.state);
      localStorage.setItem(productInfos.id, JSON.stringify(avaliacoes));
      this.setState({ ...objetoForm, formValid: false });
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
    const { productInfos } = this.props;
    ids = { productInfos };
    const { email, text, formValid } = this.state;
    const ratingLentgh = 5;
    const getItem = avaliacoes;
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
                onChange={
                  (event) => this.handleChange('email', event.target.value)
                }
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
                      onChange={
                        (event) => this.handleChange('rating', event.target.value)
                      }
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
              onChange={
                (event) => this.handleChange('text', event.target.value)
              }
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
        { formValid ? <p data-testid="error-msg">Campos inválidos</p> : null }
        <div>
          <h4> Avaliações: </h4>
          <div className="evaluation-user-container">
            {getItem.map((avaliacao, i) => (
              <div key={ i } className="avaliaçoes">
                <h5>Email:</h5>
                <p data-testid="review-card-email">{avaliacao.email}</p>
                <h5> Nota: </h5>
                <p data-testid="review-card-rating">{avaliacao.rating}</p>
                <h5> Avaliação: </h5>
                <p data-testid="review-card-evaluation">{avaliacao.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
Form.propTypes = {
  productInfos: PropTypes.string,
}.isRequired;

export default Form;
