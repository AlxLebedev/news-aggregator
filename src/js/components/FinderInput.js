/**
 * Class FinderInput выдает подсказку пользователю в случае, если запрос пользователя, введенный
 * в элемент input с классом finder__input не является валидным
 */

export default class FinderInput {
  constructor() {
    this.finderInputContainer = document.querySelector('.finder__input-container');
  }

  /**
   * Метод подказывает подсказку, если пользователь отправляет невалидный запрос
   */

  showHint() {
    if (!this.finderInputContainer.classList.contains('finder__input-container--invalid')) {
      this.finderInputContainer.classList.add('finder__input-container--invalid');
    }
  }

  /**
   * Метод скрывает подсказку, если пользователь начал изменять значение элемента input
   */

  hideHint() {
    if (this.finderInputContainer.classList.contains('finder__input-container--invalid')) {
      this.finderInputContainer.classList.remove('finder__input-container--invalid');
    }
  }
}
