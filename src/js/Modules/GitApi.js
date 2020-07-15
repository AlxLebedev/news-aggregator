export default class GitApi {
  constructor(url) {
    this.url = url;
    this.commits = 'not yet:)))';
  }

  async fetchCommits() {
    let response = await fetch(this.url);

    if (response.ok) {
      this.commits = await response.json();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
    return this.commits;
  }
}
