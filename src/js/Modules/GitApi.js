export default class GitApi {
  constructor(url) {
    this.url = url;
    this.commits = null;
  }

  async fetchCommits() {
    let response = await fetch(this.url);

    if (response.ok) {
      this.commits = await response.json();
      return this.commits;
    } else {
      return `Не удалось загрузить коммиты, ошибка сервера: ${response.status}`;
    }
  }
}
