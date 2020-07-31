export default class ShowMoreButton {
  constructor(articles) {
    this.articles = articles;
  }

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
