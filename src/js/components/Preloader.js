export default class Preloader {
  constructor() {
    this.resultsBlock = document.querySelector('.results');
    this.preloaderElement = null;
    this.preloaderTemplate = document.getElementById('preloader-template');
  }

  show() {
    const preloader = this.preloaderTemplate.content.cloneNode(true);
    this.resultsBlock.append(preloader);
  }

  hide() {
    const preloaderElement = document.querySelector('.preloader');
    if (preloaderElement) {
      preloaderElement.remove();
    }
  }
}
