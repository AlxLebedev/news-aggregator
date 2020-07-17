export default class Markup {
  constructor() {
    this.preloaderMarkup = null;
    this.commitMarkup = null;
    this.notFoundMarkup = null;
    this.serverErrorMarkup = null;
    this.resultsMarkup = null;
    this.articleMarkup = null;
  }

  getPreloaderMarkup() {
    this.preloaderMarkup = `
    <div class="preloader results__preloader">
        <div class="preloader__container">
          <span class="preloader__element"></span>
        </div>
        <p class="preloader__message">
          Идет поиск новостей...
        </p>
      </div>
    `;
    return this.preloaderMarkup;
  }

  getCommitMarkup(data) {
    const commitData = data;
    this.commitMarkup = `
    <div class="swiper-slide">
      <div class="commit">
        <div class="commit__wrapper">
          <p class="commit__date">${commitData.date}</p>
          <div class="developer commit__developer">
            <div class="developer__image-box">
              <img class="developer__image" src="${commitData.avatar}">
            </div>
            <div class="developer__info">
              <p class="developer__name">${commitData.name}</p>
              <p class="developer__mail">${commitData.email}</p>
            </div>
          </div>
          <p class="commit__message">
            ${commitData.message}
          </p>
        </div>
      </div>
    </div>
    `;
    return this.commitMarkup;
  }

  getNotFoundMarkup() {
    this.notFoundMarkup = `
    <div class="error">
      <div class="error__wrapper">
        <svg class="error__image" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="43" cy="43" r="36.5" stroke="#b6bcbf"/>
          <path d="M69 69L88.5 88.5" stroke="#b6bcbf"/>
          <path d="M58.3283 55.9592C54.6606 51.6981 49.2275 49 43.1642 49C37.1009 49 31.6678 51.6981 28 55.9592" stroke="#b6bcbf"/>
          <circle cx="55.5" cy="33.5" r="1.5" fill="#b6bcbf"/>
          <circle cx="30.5" cy="33.5" r="1.5" fill="#b6bcbf"/>
        </svg>
        <p class="error__warning">Ничего не найдено</p>
        <p class="error__message">К сожалению по вашему запросу ничего не найдено.</p>
      </div>
    </div>
    `;
    return this.notFoundMarkup;
  }

  getServerErrorMarkup() {
    this.serverErrorMarkup = `
    <div class="error">
      <div class="error__wrapper">
        <svg class="error__image" width="64" height="64" viewBox="0 0 64 64" enable-background="new 0 0 64 64" fill="#b6bcbf"><path d="M32,2C15.432,2,2,15.432,2,32s13.432,30,30,30c16.569,0,30-13.432,30-30S48.568,2,32,2z M32,59.5
		      C16.836,59.5,4.5,47.164,4.5,32S16.836,4.5,32,4.5c15.165,0,27.5,12.336,27.5,27.5S47.164,59.5,32,59.5z"/><path d="m30.75 29c0-6.479-5.271-11.75-11.75-11.75-6.479 0-11.75 5.271-11.75 11.75s5.271 11.75 11.75 11.75c6.479 0 11.75-5.271 11.75-11.75m-11.75 10.25c-5.651 0-10.25-4.598-10.25-10.25s4.598-10.25 10.25-10.25c5.652 0 10.25 4.598 10.25 10.25s-4.598 10.25-10.25 10.25"/><path d="m19 24c-2.763 0-5 2.237-5 5s2.236 5 5 5c2.758 0 5-2.237 5-5s-2.243-5-5-5"/><path d="M45,17.25c-6.479,0-11.75,5.271-11.75,11.75S38.521,40.75,45,40.75S56.75,35.479,56.75,29S51.479,17.25,45,17.25z
		      M45,39.25c-5.652,0-10.25-4.598-10.25-10.25S39.348,18.75,45,18.75S55.25,23.348,55.25,29S50.652,39.25,45,39.25z"/><path d="m45 24c-2.764 0-5 2.237-5 5s2.236 5 5 5c2.758 0 5-2.237 5-5s-2.242-5-5-5"/><path d="m38.51 12.645c4.17-.748 8.457.4 11.693 3.133.443.387 1.955-1.205 1.414-1.674-3.736-3.154-8.684-4.479-13.492-3.615-.703.134-.193 2.269.385 2.156"/><path d="m13.795 15.627c3.238-2.732 7.525-3.881 11.693-3.133.578.113 1.09-2.021.387-2.156-4.811-.863-9.757.463-13.492 3.615-.541.469.969 2.063 1.412 1.674"/><path d="m32 40c-4.969 0-9 4.029-9 9s4.031 9 9 9c4.973 0 9-4.029 9-9s-4.027-9-9-9m-6 6c1.197-2.391 3.436-4 5.998-4 2.567 0 4.803 1.607 6.002 4h-12"/>
        </svg>
        <p class="error__warning">Упс, проблемка...</p>
        <p class="error__message">Не получается получить ответ от сервера.</p>
      </div>
    </div>
    `;
    return this.serverErrorMarkup;
  }

  getResultsMarkup() {
    this.resultsMarkup = `
    <div class="results__content">
        <div class="results__header">
          <h2 class="results__title">Результаты поиска</h2>
          <a class="results__link" href="./stat.html">Посмотреть аналитику ></a>
        </div>
        <div class="results__articles"></div>
        <button class="button results__button" type="button">Показать еще</button>
      </div>
    `;
    return this.resultsMarkup;
  }

  getArticleMarkup(data) {
    const articleData = data;
    this.articleMarkup = `
    <article class="article results__article">
      <a class="article__link" href="${articleData.url == null ? `` : articleData.url}" target="_blank">
        <div class="article__image-box">
          <img class="article__image" src="${articleData.image == null ? `card-image.png` : articleData.image}" alt="инфо о картинке">
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
