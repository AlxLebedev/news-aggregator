export default class DrawUI {
  constructor() {
    this.finderSearchField = document.querySelector('.finder__search');
  }

  showError() {
    if (!this.finderSearchField.classList.contains('finder__search--invalid')) {
      this.finderSearchField.classList.add('finder__search--invalid');
    }
  }

  hideError() {
    if (this.finderSearchField.classList.contains('finder__search--invalid')) {
      this.finderSearchField.classList.remove('finder__search--invalid');
    }
  }
}
