/**
 * Class Api обращается по указанному URL, получает ответ сервера и возвращает либо ответ, либо сообщение об ошибке
 */

export default class Api {
  constructor() {
    this.response = null;
  }

  /**
   * Обращается по указаному адресу с указанными параметрами
   * @async
   * @param {string} url Адрес ресурса, по которому следует получить данные 
   * @param {Object} param Параметр авторизации на ресурсе newsApi: передается заголовок X-Api-Key
   * @returns {Promise<Object> | string} Возвращает ответ сервера или сообщение об ошибке
   */

  async fetchData(url, param) {
    try {
      this.response = param === undefined ? await fetch(url) : await fetch(url, param);
      if (this.response.ok) {
        try {
          return await this.response.json();
        } catch (e) {
          return 'bad-response';
        }
      } else {
        return this.response.status;
      }
    } catch (e) {
      return 'server-error';
    }
  }
}
