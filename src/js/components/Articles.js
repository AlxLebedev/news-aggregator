export default class ResultsArticles {
  constructor(formatDate) {
    this.formatDate = formatDate;
    this.articleTemplate = document.getElementById('article-template');
  }

  render(articles) {
    const articlesArray = articles;
    const articlesArrayLength = articlesArray.length;
  
    let firstArticle = 0;
    let lastArticle = articlesArrayLength < 3 ? articlesArrayLength - 1 : 2;

    for (let i = firstArticle; i <= lastArticle; i += 1) {
      const article = this.articleTemplate.content.cloneNode(true);

      let articleDate = this.formatDate(articlesArray[i].publishedAt);

      article.querySelector('.article__image').src = articlesArray[i].urlToImage;
      article.querySelector('.article__date').innerText = articleDate;
      article.querySelector('.article__title').innerText = articlesArray[i].title;
      article.querySelector('.article__content').innerText = articlesArray[i].description;
      article.querySelector('.article__owner').innerText = articlesArray[i].source.name;
      article.querySelector('.article__link').href = articlesArray[i].url;

      article.querySelector('.article__image').onerror = function() {
        this.remove();
      }

      const articlesContainer = document.querySelector('.results__articles');
      articlesContainer.append(article);
    }
  }
}
