export default class NewsApi {
  constructor(url, drawUI) {
    this.url = url;
    this.drawUI = drawUI;
    this.news = null;
  }

  async fetchNews() {
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
}
