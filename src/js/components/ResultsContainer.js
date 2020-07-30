export default class ResultsContainer {
  constructor() {
    this.resultsBlock = document.querySelector('.results');
    this.resultsTemplate = document.getElementById('results-template');
  }

  bindToDom() {
    const resultsContainer = this.resultsTemplate.content.cloneNode(true);
    this.resultsBlock.append(resultsContainer);
  }

  unbind() {
    const resultsContainer = document.querySelector('.results__contentainer');
    if (resultsContainer) {
      resultsContainer.remove();
    }
  }
}
