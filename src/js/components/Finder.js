export default class Finder {
  constructor(validateRequest, getDatesForNewsApi, newsApi, preloader, error) {
    this.validateRequest = validateRequest;
    this.getDatesForNewsApi = getDatesForNewsApi;
    this.newsApi = newsApi;
    this.preloader = preloader;
    this.error = error;
    this.finderSearchField = document.querySelector('.finder__search');
  }

  init() {
    const finderInput = document.querySelector('.finder__input');
    const finderButton = document.querySelector('.finder__button');

    finderInput.addEventListener( 'keypress', ( event ) => { if (event.key === 'Enter') this.getNews(finderInput.value) } );
    finderInput.addEventListener( 'input', () => this.hideHint());
    finderButton.addEventListener( 'click', () => this.getNews(finderInput.value) );
  }

  async getNews(request) {
    if (!this.validateRequest(request)) {
      this.showHint();
      return;
    }
    this.preloader.showPreloader();
    const news = await this.sendRequest(request);
    this.preloader.hidePreloader();

    if (!news.status) {
      console.log('Show pic with server error');
      return;
    }

    if (news.totalResults === 0) {
      console.log('NOT FOUND');
      this.error.showNotFoundError('not-found');
      return;
    }
    console.log('DONE');
    console.log(news);
  }

  async sendRequest(request) {
    const [fromDate, toDate] = this.getDatesForNewsApi();
    const url = `http://newsapi.org/v2/everything?q=${request}&from=${fromDate}&to=${toDate}&sortBy=publishedAt&language=ru&pageSize=100`;
    return await this.newsApi.fetchNews(url);
  }

  showHint() {
    if (!this.finderSearchField.classList.contains('finder__search--invalid')) {
      this.finderSearchField.classList.add('finder__search--invalid');
    }
  }

  hideHint() {
    if (this.finderSearchField.classList.contains('finder__search--invalid')) {
      this.finderSearchField.classList.remove('finder__search--invalid');
    }
  }
}
