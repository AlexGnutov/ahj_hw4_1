import CardValidator from './card-validator/card.validator';
import { issuers } from './data/issuers.data';

window.onload = () => {
  const cardValidator = new CardValidator(issuers);

  document.getElementById('container').append(cardValidator.html());
};
