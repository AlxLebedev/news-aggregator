export default class NewsApi {
  constructor(url) {
    this.url = url;
    this.news = 'not yet:)))';
  }

  async fetchNews() {
    let response = await fetch(this.url);

    if (response.ok) {
      this.news = await response.json();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
    return this.news;
  }
}
