import Validator from './Validator';

export default class GetNews {
  constructor() {
    this.validator = new Validator();
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
    })

    console.log(this.finderInput);
    console.log(this.finderButton);
  }
}
