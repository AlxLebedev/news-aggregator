export default class Graph {
  constructor(request, newsData, getRequestDates, getDatesRange, getRequestMonth, getRequestDays, sortArticlesByDays, getReferencesByDays) {
    this.request = request;
    this.news = newsData;
    this.getRequestDates = getRequestDates;
    this.getDatesRange = getDatesRange;
    this.getRequestMonth = getRequestMonth;
    this.getRequestDays = getRequestDays;
    this.sortArticlesByDays = sortArticlesByDays;
    this.getReferencesByDays = getReferencesByDays;
    this.requestDates = null;
    this.datesRange = null;
  }

  init() {
    this.requestDates = this.getRequestDates();
    this.datesRange = this.getDatesRange(this.requestDates);

    this.renderMonth();
    this.renderDays();
    this.renderReferencesByDays();
  }

  renderMonth() {
    const graphMontElement = document.querySelector('.graph__title-month');

    const month = this.getRequestMonth(this.datesRange);
    graphMontElement.innerText = `(${month})`;
  }

  renderDays() {
    const requestDaysElements = Array.from(document.querySelectorAll('.graph__day'));

    const requestDays = this.getRequestDays(this.datesRange);
    for (let i = 0; i < requestDaysElements.length; i += 1) {
      requestDaysElements[i].innerText = requestDays[i];
    }
  }

  renderReferencesByDays() {
    const sortedArticles = this.sortArticlesByDays(this.news.articles, this.datesRange);
    const referencesByDays = this.getReferencesByDays(sortedArticles, this.request);
    console.log(referencesByDays);
  }
}
