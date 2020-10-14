/**
 * Class Preloader показывает (скрывает) прелоадеры на загрузку новостей и на их обновление
 */

export default class Preloader {
  constructor() {
    this.preloaderTemplate = document.getElementById('preloader-template');
    this.preloaderElement = null;
    this.resultsUpdater = null;
  }

  /**
   * Метод показывает прелоадер на загрузку новостей
   * "распаковывает" шаблон прелоадера и добавляет его в DOM (блок с классом results)
   */

  show() {
    const preloader = this.preloaderTemplate.content.cloneNode(true);
    const resultsBlock = document.querySelector('.results');
    resultsBlock.prepend(preloader);
  }

  /**
   * Метод скрывает прелоадер на загрузку новостей
   */

  hide() {
    this.preloaderElement = document.querySelector('.preloader');
    if (this.preloaderElement) {
      this.preloaderElement.remove();
    }
  }

  /**
   * Метод показывает прелоадер на обновление новостей
   * Добавляет "активирующий" класс к элементу прелоадера на обновление новостей
   */

  showUpdater() {
    this.resultsUpdater = document.querySelector('.results__updater');
    if (!this.resultsUpdater.classList.contains('results__updater--active')) {
      this.resultsUpdater.classList.add('results__updater--active');
    }
  }

  /**
   * Метод скрывает прелоадер на обновление новостей
   * Убирает "активирующий" класс у элемента прелоадера на обновление новостей
   */

  hideUpdater() {
    this.resultsUpdater = document.querySelector('.results__updater');
    if (this.resultsUpdater.classList.contains('results__updater--active')) {
      this.resultsUpdater.classList.remove('results__updater--active');
    }
  }
}
