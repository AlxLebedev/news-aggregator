import GitApi from './GitApi';
import DrawUI from '../components/DrawUI';

export default class GetCommits {
  constructor() {
    this.drawUI = new DrawUI();
    this.gitApi = null;
    this.url = 'https://api.github.com/repos/AlxLebedev/news-aggregator/commits?sha=level-1&per_page=5';
    this.commits = null;
  }

  async get() {
    this.gitApi = new GitApi(this.url);
    this.commits = await this.gitApi.fetchCommits();
    this.drawUI.renderCommits(this.commits);
  }
}
