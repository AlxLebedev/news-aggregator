export default class ResultsContainer {
  constructor() {
    this.resultsTemplate = document.getElementById('results-template');
    this.resultsContainer = null;
  }

  bindToDom() {
    this.resultsContainer = this.resultsTemplate.content.cloneNode(true);
    const resultsBlock = document.querySelector('.results');
    resultsBlock.append(this.resultsContainer);
  }

  unbind() {
    this.resultsContainer = document.querySelector('.results__contentainer');
    if (this.resultsContainer) {
      this.resultsContainer.remove();
    }
  }
}
