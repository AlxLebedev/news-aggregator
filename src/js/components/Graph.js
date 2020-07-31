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
    const referencesValuesElements = Array.from(document.querySelectorAll('.graph__value'));
    const topBarValues = document.querySelectorAll('.graph__bar-value-top');
    const bottomBarValues = document.querySelectorAll('.graph__bar-value-bottom');

    const sortedArticles = this.sortArticlesByDays(this.news.articles, this.datesRange);
    const referencesByDays = this.getReferencesByDays(sortedArticles, this.request);
    const totalReferences = referencesByDays.reduce( (sum, current) => sum + current );
    const quarterOfTotalReferences = totalReferences / 4;

    let counter = null;
    for (let value of topBarValues) {
      value.innerText = totalReferences <= 10 ? (counter + quarterOfTotalReferences).toFixed(1) : Math.round(counter + quarterOfTotalReferences);
      counter += quarterOfTotalReferences;
    }

    for (let i = 0; i < bottomBarValues.length; i += 1) {
      bottomBarValues[i].innerText = topBarValues[i].innerText;
    }

    for (let i = 0; i < referencesValuesElements.length; i += 1) {
      referencesValuesElements[i].innerText = `${referencesByDays[i] === null ? `0` : referencesByDays[i]}`;
      referencesValuesElements[i].style.width = `${referencesByDays[i] === 0 ? '16px' : `${(referencesByDays[i] / totalReferences) * 100}%`}`;
    }
    
    console.log(referencesByDays);
    console.log(totalReferences);
  }
}
