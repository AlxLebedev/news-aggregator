export default class FinderInput {
  constructor() {
    this.finderInputContainer = document.querySelector('.finder__input-container');
  }

  showHint() {
    if (!this.finderInputContainer.classList.contains('finder__input-container--invalid')) {
      this.finderInputContainer.classList.add('finder__input-container--invalid');
    }
  }

  hideHint() {
    if (this.finderInputContainer.classList.contains('finder__input-container--invalid')) {
      this.finderInputContainer.classList.remove('finder__input-container--invalid');
    }
  }
}
