export default class Statistic {
  constructor() {

  }

  init(request, newsData) {
    this.renderAnalyticsHeading(request);
    this.renderNewsQuantityPerWeek(newsData.articles.length)
    console.log(newsData);
  }

  renderAnalyticsHeading(request) {
    const heading = document.querySelector('.statistic__request');
    heading.innerText = `«${request}»`;
  }

  renderNewsQuantityPerWeek(newsQuantity) {
    const newsQuantityPerWeek = newsQuantity;
    const newsQuantytyPerWeekElement = document.getElementById('statistic-news-per-week');
    newsQuantytyPerWeekElement.innerText = newsQuantityPerWeek;
  }
}
