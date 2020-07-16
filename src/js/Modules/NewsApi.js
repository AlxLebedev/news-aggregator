export default class NewsApi {
  constructor(url, drawUI) {
    this.url = url;
    this.drawUI = drawUI;
    this.news = 'not yet:)))';
  }

  async fetchNews() {
    this.drawUI.showPreloader();
    let response = await fetch(this.url);

    if (response.ok) {
      this.news = await response.json();
      this.drawUI.hidePreloader();
      this.drawUI.hideErrorWarning();
      if (this.news.totalResults === 0) {
        this.drawUI.showErrorWarning('notFound');
      }
    } else {
      this.drawUI.hidePreloader();
      this.drawUI.showErrorWarning('server');
    }
    return this.news;
  }
}
