import create from '../utils/utils';
import Icon from '../icon/icon';
import Popup from '../popup/popup';
import cardValidate from '../validators/card.validate';
import cardIssuerGrabber from '../validators/card.issuer.grabber';

export default class CardValidator {
  constructor(issuersData) {
    // Create main form - container
    this.container = create('form', 'card-validator');
    this.container.addEventListener('submit', (e) => {
      this.validate(e);
    });
    // Create icons row
    this.icons = create('div', 'validator-icons');
    issuersData.forEach((issuer) => {
      const newIcon = new Icon(issuer.logo, issuer.name);
      this.icons.appendChild(newIcon.html());
    });
    // Create input element
    this.input = create('input', 'validator-input');
    this.input.addEventListener('input', () => {
      this.valueChange();
    });
    // Create button
    this.button = create('button', 'validator-button', 'Validate');
    this.button.type = 'button';
    this.button.addEventListener('click', (e) => {
      this.validate(e);
    });
    // Create popup info element
    this.popupInfo = new Popup();
    this.container.appendChild(this.popupInfo.html());
    // Assemble validator object
    this.container.append(this.icons, this.input, this.button);
  }

  html() {
    return this.container;
  }

  validate(e) {
    e.preventDefault();
    const entry = this.input.value;
    const validation = cardValidate(entry);
    if (validation.result === 'error') {
      this.popupInfo.showWrong(validation.message);
    } else {
      this.popupInfo.showRight(validation.message);
      const issuer = cardIssuerGrabber(entry);
      if (issuer.result) {
        this.icons.querySelector(`[data-name=${issuer.name}]`).classList.remove('icon-hidden');
      }
    }
  }

  valueChange() {
    Array.from(this.icons.children).forEach((icon) => {
      icon.classList.add('icon-hidden');
    });
  }
}
