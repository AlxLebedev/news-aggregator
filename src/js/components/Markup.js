export default class Markup {
  constructor() {
    this.articleMarkup = null;
  }

  getArticleMarkup(data) {
    const articleData = data;
    this.articleMarkup = `
    <article class="article results__article">
      <a class="article__link" href="${articleData.url == null ? `` : articleData.url}" target="_blank">
        <div class="article__image-box">
          <img class="article__image" src="${articleData.image == null ? `img/image-not-found.jpg` : articleData.image}" alt="картинка на сервере не найдена">
        </div>
        <div class="article__wrapper">
          <div class="article__date">${articleData.date == null ? `дата не указана...` : articleData.date}</div>
          <h3 class="article__title">${articleData.title == null ? `` : articleData.title}</h3>
          <p class="article__content">${articleData.content == null ? `` : articleData.content}</p>
          <p class="article__owner">${articleData.owner == null ? `издатель не указан...` : articleData.owner}</p>
        </div>
      </a>
    </article>
    `;
    return this.articleMarkup;
  }
}
