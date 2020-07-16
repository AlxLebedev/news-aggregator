export default class Markup {
  constructor() {
    this.preloaderMarkup = null;
    this.commitMarkup = null;
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
}
