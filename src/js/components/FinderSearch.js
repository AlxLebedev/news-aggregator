export default class FinderSearch {
  constructor(validateRequest, newsApi, preloader, error, resultsContainer, finderInput, dataStorage, articles, showMoreButton) {
    this.validateRequest = validateRequest;
    this.newsApi = newsApi;
    this.preloader = preloader;
    this.error = error;
    this.resultsContainer = resultsContainer;
    this.finderInput = finderInput;
    this.dataStorage = dataStorage;
    this.articles = articles;
    this.showMoreButton = showMoreButton;

  }

  init() {
    const finderInput = document.querySelector('.finder__input');
    const finderButton = document.querySelector('.finder__button');

    finderInput.addEventListener( 'keypress', ( event ) => { if (event.key === 'Enter') this.getNews(finderInput.value) } );
    finderInput.addEventListener( 'input', () => this.finderInput.hideHint() );
    finderButton.addEventListener( 'click', () => this.getNews(finderInput.value) );
  }

  async getNews(request) {
    if (!this.validateRequest(request)) {
      this.finderInput.showHint();
      return;
    }
    this.error.hide();
    this.resultsContainer.unbind();
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

    this.dataStorage.setData('newsData', news);
    this.dataStorage.setData('request', request);

    this.resultsContainer.bindToDom();
    this.articles.render(news.articles);
    this.showMoreButton.init(news.articles);
  }
}
