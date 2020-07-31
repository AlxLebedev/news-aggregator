export default class ResultsContainer {
  constructor() {
    this.resultsTemplate = document.getElementById('results-template');
  }

  bindToDom() {
    const resultsContainer = this.resultsTemplate.content.cloneNode(true);
    const resultsBlock = document.querySelector('.results');
    resultsBlock.append(resultsContainer);
  }

  unbind() {
    const resultsContainer = document.querySelector('.results__contentainer');
    if (resultsContainer) {
      resultsContainer.remove();
    }
  }
}
