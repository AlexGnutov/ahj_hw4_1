/**
 * @jest-environment jsdom
 */
import CardValidator from '../card-validator/card.validator';
import { issuers } from '../data/issuers.data';

test('Check markup RandomCoords', () => {
  document.body.innerHTML = '<div id="container" class="container"></div>';
  const container = document.getElementById('container');
  const validator = new CardValidator(issuers);
  container.appendChild(validator.html());
  expect(container.innerHTML).toEqual(validator.html().outerHTML);
});

test('Test correct input', () => {
  document.body.innerHTML = '<div id="container" class="container"></div>';
  const container = document.getElementById('container');
  const validator = new CardValidator(issuers);
  container.appendChild(validator.html());

  const input = container.querySelector('.validator-input');
  input.value = '4024007102333688';
  const button = container.querySelector('.validator-button');
  button.click();
  const popup = container.querySelector('.popup-message');

  expect(popup.classList.contains('right')).toBeTruthy();
});

test('Test incorrect input', () => {
  document.body.innerHTML = '<div id="container" class="container"></div>';
  const container = document.getElementById('container');
  const validator = new CardValidator(issuers);
  container.appendChild(validator.html());

  const input = container.querySelector('.validator-input');
  input.value = '4024007102333680';
  const button = container.querySelector('.validator-button');
  button.click();
  const popup = container.querySelector('.popup-message');

  expect(popup.classList.contains('wrong')).toBeTruthy();
});
