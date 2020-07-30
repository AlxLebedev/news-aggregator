export default class Finder {
  constructor(validateRequest, newsApi, preloader, error, resultsContainer, finderInputField) {
    this.validateRequest = validateRequest;
    this.newsApi = newsApi;
    this.preloader = preloader;
    this.error = error;
    this.resultsContainer = resultsContainer;
    this.finderInputField = finderInputField;
  }

  init() {
    const finderInput = document.querySelector('.finder__input');
    const finderButton = document.querySelector('.finder__button');

    finderInput.addEventListener( 'keypress', ( event ) => { if (event.key === 'Enter') this.getNews(finderInput.value) } );
    finderInput.addEventListener( 'input', () => this.finderInputField.hideHint() );
    finderButton.addEventListener( 'click', () => this.getNews(finderInput.value) );
  }

  async getNews(request) {
    if (!this.validateRequest(request)) {
      this.finderInputField.showHint();
      return;
    }
    this.error.hide();
    this.resultsContainer.hide();
    this.preloader.show();
    const news = await this.newsApi.fetchNews(request);
    this.preloader.hide();

    if (!news.status) {
      this.error.show('server-error');
      return;
    }

    if (news.totalResults === 0) {
      this.error.show('not-found');
      return;
    }
    this.resultsContainer.show();
    console.log(news);
  }
}
