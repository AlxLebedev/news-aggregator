/**
 * Class Statistic выводит данные статистика новостного запроса на страницу:
 * новостной запрос, количество новостей за неделю и количество упоминаний в заголовках
 */

export default class Statistic {
  /**
   * @param {string} request новостной запрос пользователя 
   * @param {Object} newsData объект с данными, пришедший с сервера по запросу пользователя
   * @param {Function} getMentionsInTitles функция, возвращающая количество упоминаний запроса пользователя в заголовках
   */
  constructor(request, newsData, getMentionsInTitles) {
    this.request = request;
    this.news = newsData;
    this.getMentionsInTitles = getMentionsInTitles;
    this.statisticRequestElement = null;
    this.statisticNewsPerWeekElement = null;
  }

  /**
   * Запускает методы класса при старте страницы
   */

  init() {
    this.renderRequest(this.request);
    this.renderNewsPerWeek(this.news.articles.length);
    this.renderMentionsInTitles(this.request, this.news.articles);
  }

  /**
   * Метод выводит на страницу содержимое новостного запроса пользователя
   * @param {string} request новостной запрос пользователя 
   */

  renderRequest(request) {
    this.statisticRequestElement = document.querySelector('.statistic__request');
    this.statisticRequestElement.innerText = `«${request}»`;
  }

  /**
   * Метод выводит на страницу количество новостей по запросу пользователя за неделю
   * @param {number} newsQuantity количество новостей по запросу пользователя за неделю
   */

  renderNewsPerWeek(newsQuantity) {
    this.statisticNewsPerWeekElement = document.getElementById('statistic-news-per-week');
    this.statisticNewsPerWeekElement.innerText = newsQuantity;
  }

  /**
   * Метод выводит на страницу количество упоминаний новостей по запросу пользователя в заголовках
   * @param {string} request новостной запрос пользователя
   * @param {Object[]} articles массив объектов с новостями по запросу пользователя
   */

  renderMentionsInTitles(request, articles) {
    const mentionsInTitles = this.getMentionsInTitles(request, articles);
    const mentionsInTitlesElement = document.getElementById('statistic-mentions-in-titles');
    mentionsInTitlesElement.innerText = mentionsInTitles;
  }
}
