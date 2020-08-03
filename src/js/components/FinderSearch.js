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

    finderInput.addEventListener( 'keypress', ( event ) => { if (event.key === 'Enter') this.checkRequest(finderInput.value) } );
    finderInput.addEventListener( 'input', () => this.finderInput.hideHint() );
    finderButton.addEventListener( 'click', () => this.checkRequest(finderInput.value) );
  }

  checkRequest(request) {
    if (!this.validateRequest(request)) {
      this.finderInput.showHint();
      return;
    }

    const localData = this.dataStorage.getLocalStorageData(request);
    if (localData) {
      console.log('showing old news')
      this.renderLocalData(localData);
    } else {
      this.getNews(request);
    }
  }

  async getNews(request) {
    console.log('start fetching news')
    this.error.hide();
    this.resultsContainer.unbind();
    this.preloader.show();
    const news = await this.newsApi.fetchNews(request);
    this.preloader.hide();

    switch(news) {
      case 'not-found':
        this.error.show('not-found');
        return;
      case 'server-error':
        this.error.show('server-error');
        return;
      case 'bad-request':
        this.error.show('bad-request');
        return;
      case 'bad-response':
        this.error.show('bad-response');
        return;
      default:
        this.utiliseNews(news, request);
    }
  }

  utiliseNews(news, request) {
    this.dataStorage.addToLocalStorage(request, news);

    this.dataStorage.setData('newsData', news);
    this.dataStorage.setData('request', request);

    this.resultsContainer.bindToDom();
    this.articles.render(news.articles);
    if (document.querySelector('.results__button')) {
      this.showMoreButton.init(news.articles);
    }
  }

  renderLocalData(localData) {
    if (document.querySelector('.error')) {
      this.error.hide();
    }
    if (!document.querySelector('.results__contentainer')) {
      this.resultsContainer.bindToDom();
    }
    this.articles.render(localData.articles);

    if (document.querySelector('.results__button')) {
      this.showMoreButton.init(localData.articles);
    }
  }
}
