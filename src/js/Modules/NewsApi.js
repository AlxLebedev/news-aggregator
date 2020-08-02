import Api from './Api';

export default class NewsApi extends Api {
  constructor(getRequestDates) {
    super();
    this.getRequestDates = getRequestDates;
    this.param = {
      headers: {
        'X-Api-Key': '7c22611ba74c47b9bb7bab94a85a00f9'
      }
    }
  }

  async fetchNews(request) {
    const [fromDate, toDate] = this.getRequestDates();
    const url = `http://newsapi.org/v2/everything?q=${request}&from=${fromDate}&to=${toDate}&sortBy=publishedAt&language=ru&pageSize=100`;
    const result = await super.fetchData(url, this.param);
    if (result === 400) {
      return 'bad-request';
    }
    if (result.totalResults === 0) {
      return 'not-found';
    }
    return result;
  }
}
