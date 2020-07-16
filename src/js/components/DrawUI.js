import Markup from './Markup';

export default class DrawUI {
  constructor() {
    this.markup = new Markup();
    this.finderSearchField = document.querySelector('.finder__search');
    this.resultsBlock = document.querySelector('.results');
    this.preloaderMarkup = null;
    this.preloaderElement = null;
  }

  showError() {
    if (!this.finderSearchField.classList.contains('finder__search--invalid')) {
      this.finderSearchField.classList.add('finder__search--invalid');
    }
  }

  hideError() {
    if (this.finderSearchField.classList.contains('finder__search--invalid')) {
      this.finderSearchField.classList.remove('finder__search--invalid');
    }
  }

  showPreloader() {
    this.preloaderMarkup = this.markup.getPreloader();
    this.resultsBlock.insertAdjacentHTML('afterbegin', this.preloaderMarkup);
  }

  hidePreloader() {
    this.preloaderElement = document.querySelector('.preloader');
    this.preloaderElement.remove();
  }
}
