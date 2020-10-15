/**
 * Class FinderSearch отвечает за взаимодействие с пользователем, слушает события в строке запроса и реагирует на них
 */

export default class FinderSearch {
  /**
   * 
   * @param {Function} validateRequest Валидирует новостной запрос пользователя на пустоту 
   * @param {Function} addParamsToLinks Добавляет get-параметр с запросом пользователя в адрес внутренних ссылок 
   * @param {Function} validateLocalData Проверяет валидацию (устарели новости или нет) закешированных новостей 
   * @param {Class} newsApi Экземпляр класса получает данные с сервера на основании запроса пользователя и текущей даты 
   * @param {Class} preloader Экземпляр класса показывает (скрывает) прелоадеры на загрузку новостей и на их обновление 
   * @param {Class} error Экземпляр класса показывает или скрывает сообщение об ошибке, которая появляется в ответ на новостной запрос пользователя 
   * @param {Class} resultsContainer Экземпляр класса добавляет в DOM (или удаляет из DOM) элемент с классом results-container 
   * @param {Class} finderInput Экземпляр класса выдает подсказку пользователю в случае, если запрос пользователя не валиден 
   * @param {Class} dataStorage Экземпляр класса добавляет (извлекает) даные в (из) localStorage 
   * @param {Class} articles Экземпляр класса рендерит (или очищает) в results-container карточки с новостями, полученными с сервера 
   * @param {Class} showMoreButton Экземпляр класса отвечает за вывод карточек с новостями по нажатию на кнопку 'Показать еще'
   */
  constructor(
    validateRequest,
    addParamsToLinks,
    validateLocalData,
    newsApi,
    preloader,
    error,
    resultsContainer,
    finderInput,
    dataStorage,
    articles,
    showMoreButton,
  ) {
    this.validateRequest = validateRequest;
    this.addParamsToLinks = addParamsToLinks;
    this.validateLocalData = validateLocalData;
    this.newsApi = newsApi;
    this.preloader = preloader;
    this.error = error;
    this.resultsContainer = resultsContainer;
    this.finderInput = finderInput;
    this.dataStorage = dataStorage;
    this.articles = articles;
    this.showMoreButton = showMoreButton;
  }

  /**
   * Метод получает из DOM элементы (поле запроса и кнопка "искать") и подписывается на определенные события, возникающие
   * у этих элементов
   */

  init() {
    const finderInput = document.querySelector('.finder__input');
    const finderButton = document.querySelector('.finder__button');

    finderInput.addEventListener('keypress', (event) => { if (event.key === 'Enter') this.checkRequest(finderInput.value); });
    finderInput.addEventListener('input', () => this.finderInput.hideHint());
    finderButton.addEventListener('click', () => this.checkRequest(finderInput.value));
  }

  /**
   * Метод проверяет запрос пользователя при помощи специально функции
   * @param {string} request запрос пользователя 
   */

  checkRequest(request) {
    if (!this.validateRequest(request)) {
      this.finderInput.showHint();
      return;
    }
    this.checkLocalData(request);
  }

  /**
   * Метод получает данные из localStorage и проверяет их валидность (актуальны или устарели)
   * Если новости из локального хранилища актуальны, то передает их в метод отрисовки на странице
   * Если новости из локального хранилища устарели, отрисовывает их и передает запрос пользователя на обновление новостей
   * Если новостей в локальном хранилище нет, то получает новости по запросу пользователя
   * @param {string} request запрос пользователя
   */

  checkLocalData(request) {
    const localData = this.dataStorage.getLocalStorageData(request);
    if (localData) {
      this.resultsContainer.unbind();
      if (this.validateLocalData(localData)) {
        this.renderLocalData(localData.data, request);
      } else {
        this.renderLocalData(localData.data, request);
        this.updateNews(request);
      }
    } else {
      this.getNews(request);
    }
  }

  /**
   * Метод отрисовывает новости, полученные из локального хранилища, на странице
   * @param {Object} news Объект, пришедший с сервера по запросу пользователя 
   * @param {string} request Запрос пользователя
   */

  renderLocalData(news, request) {
    if (document.querySelector('.error')) {
      this.error.hide();
    }
    if (!document.querySelector('.results__contentainer')) {
      this.resultsContainer.bindToDom();
    }

    const internalsLinks = document.querySelectorAll('.nav__link--internal');
    this.addParamsToLinks(internalsLinks, request);

    this.articles.clear();
    this.articles.render(news.articles);

    if (document.querySelector('.results__button')) {
      this.showMoreButton.init(news.articles);
    }
  }

  /**
   * Метод обновляет новости по запросу пользователя и передает их в метод проверки результатов
   * @param {string} request запрос пользователя 
   */

  async updateNews(request) {
    this.preloader.showUpdater();
    const news = await this.newsApi.fetchNews(request);
    this.preloader.hideUpdater();
    this.resultsContainer.unbind();
    this.checkNews(news, request);
  }

  /**
   * Метод получает новости по запросу пользователя и передает их в метод проверки результатов
   * @param {string} request запрос пользователя
   */

  async getNews(request) {
    this.error.hide();
    this.resultsContainer.unbind();
    this.preloader.show();
    const news = await this.newsApi.fetchNews(request);
    this.preloader.hide();
    this.checkNews(news, request);
  }

  /**
   * Проверяет результат поучения новоствей с сервера и, в зависимости от результата, выводит те или иные
   * данные на страницу (ошибку или карточки с новостями)
   * @param {Object} news Объект, пришедший с сервера по запросу пользователя
   * @param {string} request Запрос пользоателя 
   */

  checkNews(news, request) {
    switch (news) {
      case 'not-found':
        this.error.show('not-found');
        return;
      case 'server-error':
        this.error.show('server-error');
        return;
      case 'bad-request':
        this.error.show('bad-request');
        return;
      case 'bad-response':
        this.error.show('bad-response');
        return;
      default:
        this.utiliseNews(news, request);
    }
  }

  /**
   * Метод использует проверенные новости:
   * добавляет их в локальное хранилище
   * добавляет внутренним ссылкам параметры с запросом пользователя
   * передает новости на отрисовку в метод render класса articles
   * @param {Object} news Объект, пришедший с сервера по запросу пользователя
   * @param {string} request Запрос пользоателя
   */

  utiliseNews(news, request) {
    this.dataStorage.addToLocalStorage(request, news);

    if (!document.querySelector('.results__contentainer')) {
      this.resultsContainer.bindToDom();
    }

    const internalsLinks = document.querySelectorAll('.nav__link--internal');
    this.addParamsToLinks(internalsLinks, request);

    this.articles.render(news.articles);
    if (document.querySelector('.results__button')) {
      this.showMoreButton.init(news.articles);
    }
  }
}
