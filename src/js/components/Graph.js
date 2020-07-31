export default class Graph {
  constructor(request, newsData, getRequestDates, getDatesRange, getRequestMonth) {
    this.request = request;
    this.news = newsData;
    this.getRequestDates = getRequestDates;
    this.getDatesRange = getDatesRange;
    this.getRequestMonth = getRequestMonth;
  }

  init() {
    this.renderMonth();
  }

  renderMonth() {
    const requestDates = this.getRequestDates();
    const datesRange = this.getDatesRange(requestDates);
    const month = this.getRequestMonth(datesRange);
    
    const graphMontElement = document.querySelector('.graph__title-month');
    graphMontElement.innerText = `(${month})`;
  }
}
