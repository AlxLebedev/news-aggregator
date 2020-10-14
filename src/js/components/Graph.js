/**
 * Class Graph строит график аналитики по дням на странице statistic
 */

export default class Graph {
  /**
   * @param {string} request строка, содержащая новостной запрос пользователя
   * @param {Object} newsData объект с данными, полученными с сервера по новостному запросу пользователя
   * @param {Function} getRequestDates функция, возвращает массив из вдух строк в виде дат - ['сегодня минус 6 ней назад', 'сегодня']
   * @param {Function} getDatesRange функция, возвращает массив дат за каждые сутки, начиная от 'сегодня - 6 дней назад' до 'сегодня'
   * @param {Function} getRequestMonth функция, возвращает строку с названием месяца или названиями месяцев (если их два в сете)
   * @param {Function} getRequestDays функция, возвращает массив строк в виде "25, пт". Содержит все даты от: 'сегодня минус 6 дней назад' до 'сегодня'
   * @param {Function} sortArticlesByDays функция, возвращает массив со вложенными массивами, содержащими объекты новостей за конкретную дату
   * @param {Function} getReferencesByDays функция, возвращает массив чисел вида [2, 1, 3, 0, 4, 10, 3] - первая цифра соответствует количеству упоминаний новости в дату "сегодня минус 6 дней"
   */
  constructor(
    request,
    newsData,
    getRequestDates,
    getDatesRange,
    getRequestMonth,
    getRequestDays,
    sortArticlesByDays,
    getReferencesByDays,
  ) {
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
    const totalReferences = referencesByDays.reduce((sum, current) => sum + current);
    const quarterOfTotalReferences = totalReferences / 4;

    let counter = null;
    for (const value of topBarValues) {
      value.innerText = totalReferences <= 10
        ? (counter + quarterOfTotalReferences).toFixed(1)
        : Math.round(counter + quarterOfTotalReferences);
      counter += quarterOfTotalReferences;
    }

    for (let i = 0; i < bottomBarValues.length; i += 1) {
      bottomBarValues[i].innerText = topBarValues[i].innerText;
    }

    for (let i = 0; i < referencesValuesElements.length; i += 1) {
      referencesValuesElements[i].innerText = `${referencesByDays[i] === 0 ? '0' : referencesByDays[i]}`;
      referencesValuesElements[i].style.width = `${referencesByDays[i] === 0 ? '12px' : `${(referencesByDays[i] / totalReferences) * 100}%`}`;
    }
  }
}
