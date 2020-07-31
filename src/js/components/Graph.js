export default class Graph {
  constructor(request, newsData, getRequestDates, getDatesRange, getRequestMonth, getRequestDays) {
    this.request = request;
    this.news = newsData;
    this.getRequestDates = getRequestDates;
    this.getDatesRange = getDatesRange;
    this.getRequestMonth = getRequestMonth;
    this.getRequestDays = getRequestDays;
  }

  init() {
    this.renderMonth();
    this.renderDays();
  }

  renderMonth() {
    const graphMontElement = document.querySelector('.graph__title-month');

    const requestDates = this.getRequestDates();
    const datesRange = this.getDatesRange(requestDates);

    const month = this.getRequestMonth(datesRange);
    graphMontElement.innerText = `(${month})`;
  }

  renderDays() {
    const requestDaysElements = Array.from(document.querySelectorAll('.graph__day'));

    const requestDates = this.getRequestDates();
    const datesRange = this.getDatesRange(requestDates);

    const requestDays = this.getRequestDays(datesRange);

    for (let i = 0; i < requestDaysElements.length; i += 1) {
      requestDaysElements[i].innerText = requestDays[i];
    }
    console.log(requestDays);
  }
}
