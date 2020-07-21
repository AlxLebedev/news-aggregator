import Validator from './Validator';
import Dates from '../utils/Dates';
import NewsApi from '../Modules/NewsApi';

export default class GetNews {
  constructor(drawUI) {
    this.validator = new Validator();
    this.dates = new Dates();
    this.drawUI = drawUI;
    this.userQueryValid = null;
    this.userQuery = null;
    this.fromDate = null;
    this.toDate = null;
    this.url = null;
    this.newsApi = null;
    this.news = null;
  }

  async get(userQuery) {
    this.userQuery = userQuery;
    this.userQueryValid = this.validator.check(this.userQuery);

    if (!this.userQueryValid) {
      this.drawUI.showHint();
      return;
    }
    sessionStorage.setItem('userQuery', this.userQuery);
    [ this.fromDate, this.toDate ] = this.dates.getDatesForRequest();
    this.url = `http://newsapi.org/v2/everything?q=${this.userQuery}&from=${this.fromDate}&to=${this.toDate}&language=ru&pageSize=100`;
    this.newsApi = new NewsApi(this.url, this.drawUI);
    this.news = await this.newsApi.fetchNews();
    if (this.news.totalResults !==0) {
      this.drawUI.renderResultsContent(this.news);
      sessionStorage.setItem('newsData', JSON.stringify(this.news));
    }
  }
}
