import create from '../utils/utils';

export default class Icon {
  constructor(logo, name) {
    this.container = create('div', 'payment-icon');
    this.container.dataset.name = name;
    this.container.classList.add(logo);
  }

  html() {
    return this.container;
  }
}
