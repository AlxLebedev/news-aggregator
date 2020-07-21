export default class ExternalApi {
  constructor(drawUI) {
    this.drawUI = drawUI;
    this.url = null;
    this.news = null;
    this.commits = null;
  }

  async fetchNews(url) {
    this.url = url;
    this.drawUI.cleanResultsContent();
    this.drawUI.showPreloader();
    let response = await fetch(this.url, {
      headers: {
        'X-Api-Key': '7c22611ba74c47b9bb7bab94a85a00f9'
      }
    });

    if (response.ok) {
      this.news = await response.json();
      this.drawUI.hidePreloader();
      if (this.news.totalResults === 0) {
        this.drawUI.showErrorWarning('notFound');
      }
    } else {
      this.drawUI.hidePreloader();
      this.drawUI.showErrorWarning('server');
    }
    return this.news;
  }

  async fetchCommits(url) {
    this.url = url;
    let response = await fetch(this.url);

    if (response.ok) {
      this.commits = await response.json();
      return this.commits;
    } else {
      return `Не удалось загрузить коммиты, ошибка сервера: ${response.status}`;
    }
  }
}
