/**
 * Class ShowMoreButton отвечает за вывод карточек с новостями по нажатию на кнопку 'Показать еще'.
 */

export default class ShowMoreButton {
  /**
   * @param {Class} articles Конструктор принимает экземпляр класса Articles, метод которого изпользуется в методе init класса ShowMoreButton 
   */
  constructor(articles) {
    this.articles = articles;
  }

  /**
   * Метод срабатывает по клику на кнопе "Показать еще", выбирает из массива объектов новостей первые три и передает их в метод render класса Articles
   * @param {Object[]} articles Массив объектов новостей
   */

  init(articles) {
    const articlesArray = articles;
    const showMoreButtonElement = document.querySelector('.results__button');
    if (showMoreButtonElement) {
      showMoreButtonElement.addEventListener('click', () => {
        articlesArray.splice(0, 3);
        this.articles.render(articlesArray);
      });
    }
  }
}
