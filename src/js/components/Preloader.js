export default class Preloader {
  constructor() {
    this.preloaderTemplate = document.getElementById('preloader-template');
    this.preloaderElement = null;
    this.resultsUpdater = null;
  }

  show() {
    const preloader = this.preloaderTemplate.content.cloneNode(true);
    const resultsBlock = document.querySelector('.results');
    resultsBlock.prepend(preloader);
  }

  hide() {
    this.preloaderElement = document.querySelector('.preloader');
    if (this.preloaderElement) {
      this.preloaderElement.remove();
    }
  }

  showUpdater() {
    this.resultsUpdater = document.querySelector('.results__updater');
    if (!this.resultsUpdater.classList.contains('results__updater--active')) {
      this.resultsUpdater.classList.add('results__updater--active');
    }
  }

  hideUpdater() {
    this.resultsUpdater = document.querySelector('.results__updater');
    if (this.resultsUpdater.classList.contains('results__updater--active')) {
      this.resultsUpdater.classList.remove('results__updater--active');
    }
  }
}
