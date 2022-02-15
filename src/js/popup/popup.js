import create from '../utils/utils';

export default class Popup {
  constructor() {
    this.container = create('div', 'popup-message');
    this.container.classList.add('hidden');
  }

  html() {
    return this.container;
  }

  showWrong(message) {
    this.container.innerText = message;
    this.container.classList.remove('hidden');
    this.container.classList.add('wrong');
    setTimeout(() => {
      this.container.classList.add('hidden');
      this.container.classList.remove('wrong');
      this.container.innerText = '';
    }, 2000);
  }

  showRight(message) {
    this.container.innerText = message;
    this.container.classList.remove('hidden');
    this.container.classList.add('right');
    setTimeout(() => {
      this.container.classList.add('hidden');
      this.container.classList.remove('right');
      this.container.innerText = '';
    }, 2000);
  }

  hide() {
    this.container.classList.add('hidden');
    this.container.classList.remove('right');
    this.container.classList.remove('wrong');
    this.container.innerText = '';
  }
}
