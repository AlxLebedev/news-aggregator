import Api from './Api';

/**
 * Class GitApi получает данные о комитах от GitHub
 * @extends Api
 */

export default class GitApi extends Api {
  constructor() {
    super();
    this.url = 'https://api.github.com/repos/AlxLebedev/news-aggregator/commits?per_page=5';
  }

  /**
   * Получает коммиты от gitHub через метод родительского класса по указанному адресу
   * @async
   * @returns {Object | string} Возвращает или ответ сервера или сообщение об ошибке
   */

  async fetchCommits() {
    return super.fetchData(this.url);
  }
}
