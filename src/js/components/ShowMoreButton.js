export default class ShowMoreButton {
  constructor(articles) {
    this.articles = articles;
    this.articlesArray = null;
  }

  init(articles) {
    this.articlesArray = articles;
    const showMoreButtonElement = document.querySelector('.results__button');
    showMoreButtonElement.addEventListener('click', () => {
      this.articlesArray.splice(0, 3);
      this.articles.render(this.articlesArray);
    });
  }
}
