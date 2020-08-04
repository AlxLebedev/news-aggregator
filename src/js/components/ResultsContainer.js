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

  addLinkParameters(param) {
    const internalsLinks = Array.from(document.querySelectorAll('.internals-links'));
    internalsLinks.map( link => link.href = `${link.href}?request=${param}`);
  }

  showUpdater() {
    const resultsUpdater = document.querySelector('.results__updater');
    if (!resultsUpdater.classList.contains('results__updater--active')) {
      resultsUpdater.classList.add('results__updater--active');
    }
  }

  hideUpdater() {
    const resultsUpdater = document.querySelector('.results__updater');
    if (resultsUpdater.classList.contains('results__updater--active')) {
      resultsUpdater.classList.remove('results__updater--active');
    }
  }
}
