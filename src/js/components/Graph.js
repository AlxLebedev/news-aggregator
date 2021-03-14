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

  /**
   * Инициализирующий метод
   * Определяет два значения и запускает остальные методы класса друг за другом
   */

  init() {
    /**
     * @type {string[]} массив строк
     */
    this.requestDates = this.getRequestDates();
    /**
     * @type {Date[]} массив дат
     */
    this.datesRange = this.getDatesRange(this.requestDates);

    this.renderMonth();
    this.renderDays();
    this.renderReferencesByDays();
  }

  /**
   * Метод отрисовывает название месяца в графике с аналитикой
   */

  renderMonth() {
    const graphMontElement = document.querySelector('.graph__title-month');

    const month = this.getRequestMonth(this.datesRange);
    graphMontElement.innerText = `(${month})`;
  }

  /**
   * Метод отрисовывает дни недели в графике с аналитикой (в формате "10, сб")
   */

  renderDays() {
    const requestDaysElements = Array.from(document.querySelectorAll('.graph__day'));

    const requestDays = this.getRequestDays(this.datesRange);
    for (let i = 0; i < requestDaysElements.length; i += 1) {
      requestDaysElements[i].innerText = requestDays[i];
    }
  }

  /**
   * Метод отрисовывает количество упоминаний в определенный день недели
   */

  renderReferencesByDays() {
    const referencesValuesElements = Array.from(document.querySelectorAll('.graph__value'));
    const topBarValues = document.querySelectorAll('.graph__bar-value-top');
    const bottomBarValues = document.querySelectorAll('.graph__bar-value-bottom');

    /**
     * @type {Array[]} Массив со вложенными массивами, содержащими объекты новостей за конкретную дату
     */
    const sortedArticles = this.sortArticlesByDays(this.news.articles, this.datesRange);

    /**
     * @type {number[]} Массив вида [2, 1, 3, 0, 4, 10, 3] - первая цифра соответствует количеству упоминаний в дату "сегодня минус 6 дней"
     */
    const referencesByDays = this.getReferencesByDays(sortedArticles, this.request);

    /**
     * @type {number} Общее количество упоминаний запроса в новостях
     */
    const totalReferences = referencesByDays.reduce((sum, current) => sum + current);

    /**
     * @type {number} Одна четверть от общего числа упоминаний - нужна для отрисовки верхнего и нижнего бара с линейкой
     */
    const quarterOfTotalReferences = totalReferences / 4;


    /**
     * Цикл наполняет значениями верхний бар. Конечное число помещается в конце линейки, четверти распределяются по линейке
     */
    let counter = null;
    for (const value of topBarValues) {
      value.innerText = totalReferences <= 10
        ? (counter + quarterOfTotalReferences).toFixed(1)
        : Math.round(counter + quarterOfTotalReferences);
      counter += quarterOfTotalReferences;
    }

    /**
     * Цикл наполняет значениями нижний бар. Берет значение из верхнего бара и дублирует в нижнем
     */
    for (let i = 0; i < bottomBarValues.length; i += 1) {
      bottomBarValues[i].innerText = topBarValues[i].innerText;
    }

    /**
     * Цикл отрисовывает значения количества упоминаний в дне недели. Добавляет значение в виде цифры и
     * устанавливает ширину гоизонталной диаграммы
     */

    for (let i = 0; i < referencesValuesElements.length; i += 1) {
      referencesValuesElements[i].innerText = `${referencesByDays[i] === 0 ? '0' : referencesByDays[i]}`;
      referencesValuesElements[i].style.width = `${referencesByDays[i] === 0 ? '12px' : `${(referencesByDays[i] / totalReferences) * 100}%`}`;
    }
  }
}
