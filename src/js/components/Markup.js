export default class Markup {
  constructor() {
    this.preloaderMarkup = null;
  }

  getPreloader() {
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
}
