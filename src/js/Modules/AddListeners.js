import Validator from './Validator';
// import DrawUI from '../components/DrawUI';
import GetNews from './GetNews';

export default class AddListeners {
  constructor(drawUI) {
    this.validator = new Validator();
    this.drawUI = drawUI;
    this.getNews = new GetNews(this.drawUI);
    this.finderInput = document.querySelector('.finder__input');
    this.finderButton = document.querySelector('.finder__button');
    this.userQuery = null;
    this.userQueryValid = null;
  }

  init() {
    this.finderButton.addEventListener('click', () => {
      this.userQuery = this.finderInput.value;
      this.finderInput.value = '';
      this.userQueryValid = this.validator.check(this.userQuery);
      if (!this.userQueryValid) {
        this.drawUI.showHint();
        return;
      }
      this.getNews.get(this.userQuery);
    });

    this.finderInput.addEventListener('input', () => {
      this.drawUI.hideHint();
    });
  }
}
