export default class Graph {
  constructor(request, newsData, getRequestDates, getDatesRange, getRequestMonth, getRequestDays) {
    this.request = request;
    this.news = newsData;
    this.getRequestDates = getRequestDates;
    this.getDatesRange = getDatesRange;
    this.getRequestMonth = getRequestMonth;
    this.getRequestDays = getRequestDays;
    this.requestDates = null;
    this.datesRange = null;
  }

  init() {
    this.requestDates = this.getRequestDates();
    this.datesRange = this.getDatesRange(this.requestDates);

    this.renderMonth();
    this.renderDays();
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
}
