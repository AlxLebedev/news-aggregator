export default class Analytics {
  constructor() {

  }

  init(request, newsData) {
    this.renderAnalyticsHeading(request);
    this.renderNewsQuantityPerWeek(newsData.articles.length)
    console.log(newsData);
  }

  renderAnalyticsHeading(request) {
    const heading = document.querySelector('.stat__request');
    heading.innerText = `«${request}»`;
  }

  renderNewsQuantityPerWeek(newsQuantity) {
    const newsQuantityPerWeek = newsQuantity;
    const newsQuantytyPerWeekElement = document.getElementById('news-per-week');
    newsQuantytyPerWeekElement.innerText = newsQuantityPerWeek;
  }
}
