import DrawUI from '../components/DrawUI';
import ExternalApi from '../Modules/ExternalApi';

export default class GetCommits {
  constructor() {
    this.drawUI = new DrawUI();
    this.externalApi = new ExternalApi(this.drawUI);
    this.url = 'https://api.github.com/repos/AlxLebedev/news-aggregator/commits?per_page=5';
    this.commits = null;
  }

  async init() {
    this.commits = await this.externalApi.fetchCommits(this.url);
    this.drawUI.renderCommits(this.commits);
  }
}
