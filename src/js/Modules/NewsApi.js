import Api from './Api';

export default class NewsApi extends Api {
  constructor() {
    super();
    this.param = {
      headers: {
        'X-Api-Key': '7c22611ba74c47b9bb7bab94a85a00f9'
      }
    }
  }

  async fetchNews(url) {
    return super.fetchData(url, this.param);
  }
}
