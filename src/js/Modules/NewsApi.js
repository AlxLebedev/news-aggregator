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
    } else {
      this.drawUI.hidePreloader();
      alert("Ошибка HTTP: " + response.status);
    }
    return this.news;
  }
}
