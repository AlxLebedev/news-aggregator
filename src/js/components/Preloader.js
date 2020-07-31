export default class Preloader {
  constructor() {
    this.preloaderTemplate = document.getElementById('preloader-template');
  }

  show() {
    const preloader = this.preloaderTemplate.content.cloneNode(true);
    const resultsBlock = document.querySelector('.results');
    resultsBlock.append(preloader);
  }

  hide() {
    const preloaderElement = document.querySelector('.preloader');
    if (preloaderElement) {
      preloaderElement.remove();
    }
  }
}
