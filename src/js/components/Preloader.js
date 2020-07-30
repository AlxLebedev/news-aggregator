export default class Preloader {
  constructor() {
    this.resultsBlock = document.querySelector('.results');
    this.preloaderElement = null;
    this.preloaderTemplate = document.getElementById('preloader-template');
  }

  showPreloader() {
    const preloader = this.preloaderTemplate.content.cloneNode(true);
    this.resultsBlock.appendChild(preloader);
  }

  hidePreloader() {
    this.preloaderElement = document.querySelector('.preloader');
    this.preloaderElement.remove();
  }
}
