import Api from './Api';

/**
 * Class NewsApi получает данные с сервера на основании запроса пользователя и текущей даты
 * @extends Api
 */

export default class NewsApi extends Api {
  /**
   * В параметр конструктора передаем функцию getRequestDates
   * @param {function} getRequestDates 
   */
  constructor(getRequestDates) {
    super();
    this.getRequestDates = getRequestDates;
    this.param = {
      headers: {
        'X-Api-Key': '7c22611ba74c47b9bb7bab94a85a00f9',
      },
    };
  }

  /**
   * Получает новости от сервиса NewsApi по указанному адресу с определенными параметрами
   * @async
   * @param {string} request Запрос пользователя
   * @returns {Object | string} Возвращает или ответ сервера (Object) или сообщение об ошибке (string) 
   */

  async fetchNews(request) {
    const [fromDate, toDate] = this.getRequestDates();
    const url = `http://newsapi.org/v2/everything?q=${request}&from=${fromDate}&to=${toDate}&sortBy=publishedAt&language=ru&pageSize=100`;
    const result = await super.fetchData(url, this.param);
    if (result === 400) {
      return 'bad-request';
    }
    if (result.totalResults === 0) {
      return 'not-found';
    }
    return result;
  }
}
