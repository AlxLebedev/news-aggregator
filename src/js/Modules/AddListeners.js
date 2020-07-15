import Validator from './Validator';
import DrawUI from '../components/DrawUI';

export default class AddListeners {
  constructor() {
    this.validator = new Validator();
    this.drawUI = new DrawUI();
    this.finderInput = document.querySelector('.finder__input');
    this.finderButton = document.querySelector('.finder__button');
    this.userQuery = null;
    this.userQueryValid = null;
  }

  init() {
    this.finderButton.addEventListener('click', () => {
      this.userQuery = this.finderInput.value;
      console.log(this.userQuery);
      this.userQueryValid = this.validator.check(this.userQuery);
      console.log(this.userQueryValid);
      if (!this.userQueryValid) {
        this.drawUI.showError();
        return;
      }
      console.log('OK, all is valid')
    });

    this.finderInput.addEventListener('input', () => {
      this.drawUI.hideError();
    });
  }
}
