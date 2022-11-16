import { Component } from 'react';

const objetoForm = {
  email: '',
  text: '',
  rating: '',
};

class Form extends Component {
  state = {
    ...objetoForm,
    formValid: true,
  };

  componentDidMount() {
    this.handleChange();
    this.desableBtn();
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  sendform = (event) => {
    const { rating, email } = this.state;
    if (email === '' || rating === '') {
      event.preventDefault();
      this.setState({ formValid: true });
    } else {
      const avaliacoes = [];
      avaliacoes.push(this.state);
      localStorage.setItem('form', JSON.stringify(avaliacoes));
      this.setState({ ...objetoForm, formValid: false });
    }
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
    const ratingLent = 5;
    const getItem = JSON.parse(localStorage.getItem('form'));
    const texto = <p>Não há avaliações para esse produto</p>;
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
              {[...Array(ratingLent)].map((_, index) => {
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
          <h4> Avaliações de produtos: </h4>

          {avaliacoes.length === 0
            ? texto
            : (
              <div className="evaluation-user-container">
                { getItem.map((avaliacao) => (
                  <div key={ avaliacao.email }>
                    <p>{avaliacao.email}</p>
                    <p>{avaliacao.rating}</p>
                    <p>{avaliacao.text}</p>
                  </div>
                ))}
              </div>
            )}

        </div>
      </div>
    );
  }
}

export default Form;
