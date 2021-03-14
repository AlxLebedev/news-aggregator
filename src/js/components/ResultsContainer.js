/**
 * Class ResultsContainer добавляет в DOM (или удаляет из DOM) элемент с классом results-container.
 * Внутри этого элемента отображается лоадер и ответ сервера (карточки с новостями или сообщения об ошибках)
 */

export default class ResultsContainer {
  constructor() {
    this.resultsTemplate = document.getElementById('results-template');
    this.resultsContainer = null;
  }

  /**
   * Добавляет в секцию results контейнер с классом results-container
   */

  bindToDom() {
    this.resultsContainer = this.resultsTemplate.content.cloneNode(true);
    const resultsBlock = document.querySelector('.results');
    resultsBlock.append(this.resultsContainer);
  }

  /**
   * Удаляет из секции results контейнер с классом results-container
   */

  unbind() {
    this.resultsContainer = document.querySelector('.results__contentainer');
    if (this.resultsContainer) {
      this.resultsContainer.remove();
    }
  }
}
