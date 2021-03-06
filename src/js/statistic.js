import '../img/svg/common/fb.svg';
import '../img/svg/common/github.svg';

import '../scss/styles-page-statistic.scss';

import DataStorage from './Modules/DataStorage';
import NewsApi from './Modules/NewsApi';
import Statistic from './components/Statistic';
import Graph from './components/Graph';

import validateLocalData from './utils/validate-localData';
import getMentionsInTitles from './utils/get-mentions-in-titles';
import getRequestDates from './utils/get-request-dates';
import getDatesRange from './utils/get-dates-range';
import getRequestMonth from './utils/get-request-month';
import getRequestDays from './utils/get-request-days';
import sortArticlesByDays from './utils/sort-articles-by-days';
import getReferencesByDays from './utils/get-references-by-days';
import addParamsToLinks from './utils/add-params-to-links';

const dataStorage = new DataStorage();

const newsApi = new NewsApi(getRequestDates);

const urlParameters = new URL(location.href).searchParams;
const request = urlParameters.get('request');
const localData = dataStorage.getLocalStorageData(request);


/**
 * Функция проверяет актуальность новостей по запросу пользователя, хранящиеся в локальном хранилище
 * Если новости устарели, запрашивает новые
 * Передает актуальные новости в классы Statistic и Graph для отрисовки данных на странице статистики
 * @param {Object} storageData объект с данными из локального хранилища 
 */
async function checkLocalData(storageData) {
  if (storageData) {
    const internalsLinks = document.querySelectorAll('.nav__link--internal');
    addParamsToLinks(internalsLinks, request);

    let actlualData = null;

    if (validateLocalData(storageData)) {
      actlualData = storageData.data;
    } else {
      actlualData = await newsApi.fetchNews(request);
    }

    const statistic = new Statistic(request, actlualData, getMentionsInTitles);
    const graph = new Graph(
      request,
      actlualData,
      getRequestDates,
      getDatesRange,
      getRequestMonth,
      getRequestDays,
      sortArticlesByDays,
      getReferencesByDays,
    );
    statistic.init();
    graph.init();
  }
}

checkLocalData(localData);
