import GitApi from './GitApi';

export default class GetCommits {
  constructor() {
    this.gitApi = null;
    this.url = 'https://api.github.com/repos/AlxLebedev/news-aggregator/commits?per_page=5';
    this.commits = null;
  }

  async get() {
    this.gitApi = new GitApi(this.url);
    this.commits = await this.gitApi.fetchCommits();
    console.log(this.commits);
  }

  // async fetchCommits() {
  //   let response = await fetch(this.url);

  //   if (response.ok) {
  //     this.commits = await response.json();
  //   } else {
  //     alert("Ошибка HTTP: " + response.status);
  //   }
  //   return this.commits;
  // }
}
