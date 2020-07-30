export default class ResultsContainer {
  constructor() {
    this.resultsBlock = document.querySelector('.results');
    this.resultsTemplate = document.getElementById('results-template');
  }

  show() {
    const resultsContainer = this.resultsTemplate.content.cloneNode(true);
    this.resultsBlock.appendChild(resultsContainer);
  }

  hide() {
    const resultsContainer = document.querySelector('.results__contentainer');
    if (resultsContainer) {
      resultsContainer.remove();
    }
  }
}
