import Validator from './Validator';
import DrawUI from '../components/DrawUI';
import GetNews from './GetNews';

export default class AddListeners {
  constructor() {
    this.validator = new Validator();
    this.drawUI = new DrawUI();
    this.getNews = new GetNews(this.drawUI);
    this.finderInput = document.querySelector('.finder__input');
    this.finderButton = document.querySelector('.finder__button');
    this.userQuery = null;
    this.userQueryValid = null;
  }

  init() {
    this.finderButton.addEventListener('click', () => {
      this.userQuery = this.finderInput.value;
      // console.log(this.userQuery);
      this.userQueryValid = this.validator.check(this.userQuery);
      // console.log(this.userQueryValid);
      if (!this.userQueryValid) {
        this.drawUI.showError();
        return;
      }
      this.getNews.get(this.userQuery);
    });

    this.finderInput.addEventListener('input', () => {
      this.drawUI.hideError();
    });
  }
}
