export default class Articles {
  constructor(formatDate) {
    this.formatDate = formatDate;
    this.articleTemplate = document.getElementById('article-template');
    this.articlesContainer = null;
  }

  render(articles) {
    const articlesArray = articles;
    const articlesArrayLength = articlesArray.length;

    const firstArticle = 0;
    const lastArticle = articlesArrayLength < 3 ? articlesArrayLength - 1 : 2;

    for (let i = firstArticle; i <= lastArticle; i += 1) {
      const article = this.articleTemplate.content.cloneNode(true);
      const articleDate = this.formatDate(articlesArray[i].publishedAt);

      article.querySelector('.article__image').src = articlesArray[i].urlToImage;
      article.querySelector('.article__date').innerText = articleDate;
      article.querySelector('.article__title').innerText = articlesArray[i].title;
      article.querySelector('.article__content').innerText = articlesArray[i].description;
      article.querySelector('.article__owner').innerText = articlesArray[i].source.name;
      article.querySelector('.article__link').href = articlesArray[i].url;

      article.querySelector('.article__image').onerror = function () {
        this.remove();
      };

      this.articlesContainer = document.querySelector('.results__articles');
      this.articlesContainer.append(article);
    }

    if (articlesArrayLength <= 3) {
      const showMoreButton = document.querySelector('.results__button');
      if (showMoreButton) {
        showMoreButton.remove();
      }
    }
  }

  clear() {
    this.articlesContainer = document.querySelector('.results__articles');
    while (this.articlesContainer.firstChild) {
      this.articlesContainer.removeChild(this.articlesContainer.firstChild);
    }
  }
}
