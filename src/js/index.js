import '../img/svg/common/arrow.svg';
import '../img/svg/common/fb.svg';
import '../img/svg/common/github.svg';
import '../img/svg/index/three-dots.svg';

import '../scss/styles-page-index.scss';

import notFoundErrorPic from '../img/static/not-found-error.png';
import serverErrorPic from '../img/static/server-error.png';
import badRequestPic from '../img/static/bad-request.png';
import badResponsePic from '../img/static/bad-response.png';

import validateRequest from './utils/validate-request';
import addParamsToLinks from './utils/add-params-to-links';
import getRequestDates from './utils/get-request-dates';
import validateLocalData from './utils/validate-localData';
import NewsApi from './Modules/NewsApi';
import Preloader from './components/Preloader';
import Error from './components/Error';
import ResultsContainer from './components/ResultsContainer';
import FinderInput from './components/FinderInput';
import DataStorage from './Modules/DataStorage';
import Articles from './components/Articles';
import formatDate from './utils/format-date';
import ShowMoreButton from './components/ShowMoreButton';
import FinderSearch from './components/FinderSearch';

const newsApi = new NewsApi(getRequestDates);
const preloader = new Preloader();
const error = new Error(notFoundErrorPic, serverErrorPic, badRequestPic, badResponsePic);
const resultsContainer = new ResultsContainer();
const finderInput = new FinderInput();
const dataStorage = new DataStorage();
const articles = new Articles(formatDate);
const showMoreButton = new ShowMoreButton(articles);

const finderSearch = new FinderSearch(
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
);
finderSearch.init();

const urlParameters = new URL(location.href).searchParams;
const request = urlParameters.get('request');
const localData = dataStorage.getLocalStorageData(request);

if (localData) {
  document.querySelector('.finder__input').value = request;

  resultsContainer.bindToDom();

  const internalsLinks = Array.from(document.querySelectorAll('.internals-links'));
  addParamsToLinks(internalsLinks, request);

  if (validateLocalData(localData)) {
    finderSearch.renderLocalData(localData.data, request);
  } else {
    finderSearch.renderLocalData(localData.data, request);
    finderSearch.updateNews(request);
  }
}
