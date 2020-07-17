import Dates from '../utils/Dates';
import NewsApi from '../Modules/NewsApi';

export default class GetNews {
  constructor(drawUI) {
    this.dates = new Dates();
    this.drawUI = drawUI;
    this.apiKey = '7c22611ba74c47b9bb7bab94a85a00f9';
    this.userQuery = null;
    this.fromDate = null;
    this.toDate = null;
    this.url = null;
    this.newsApi = null;
    this.news = null;
  }

  async get(userQuery) {
    this.userQuery = userQuery;
    [ this.fromDate, this.toDate ] = this.dates.getDatesForRequest();
    this.url = `http://newsapi.org/v2/everything?q=${this.userQuery}&from=${this.fromDate}&to=${this.toDate}&pageSize=10&apiKey=${this.apiKey}`;
    this.newsApi = new NewsApi(this.url, this.drawUI);
    this.news = await this.newsApi.fetchNews();
    // if (this.news.totalResults !== 0) {
    //   this.drawUI.hideResultsContent();
    //   this.drawUI.renderResultsContent(this.news);
    // } else {
    //   this.drawUI.hideResultsContent();
    // }
    if(this.news.totalResults !==0) {
      this.drawUI.renderResultsContent(this.news);
    }
  }
}
