import Validator from './Validator';
import Dates from '../utils/Dates';
import ExternalApi from '../Modules/ExternalApi';

export default class GetNews {
  constructor(drawUI) {
    this.validator = new Validator();
    this.dates = new Dates();
    this.drawUI = drawUI;
    this.externalApi = new ExternalApi(this.drawUI);
    this.userQuery = null;
    this.fromDate = null;
    this.toDate = null;
  }

  async get(userQuery) {
    this.userQuery = userQuery;
    const userQueryValid = this.validator.check(this.userQuery);

    if (!userQueryValid) {
      this.drawUI.showHint();
      return;
    }
    sessionStorage.setItem('userQuery', this.userQuery);
    [ this.fromDate, this.toDate ] = this.dates.getDatesForRequest();
    const url = `http://newsapi.org/v2/everything?q=${this.userQuery}&from=${this.fromDate}&to=${this.toDate}&language=ru&pageSize=100`;
    const news = await this.externalApi.fetchNews(url);
    if (news.totalResults !== 0) {
      this.drawUI.renderResultsContent(news);
      sessionStorage.setItem('newsData', JSON.stringify(news));
    }
  }
}
