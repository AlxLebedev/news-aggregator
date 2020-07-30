import Api from './Api';

export default class GitApi extends Api {
  constructor() {
    super();
    this.url = 'https://api.github.com/repos/AlxLebedev/news-aggregator/commits?per_page=5';
  }

  async fetchCommits() {
    return super.fetchData(this.url);
  }
}
