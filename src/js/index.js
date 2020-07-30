import '../img/svg/common/arrow.svg';
import '../img/svg/common/fb.svg';
import '../img/svg/common/github.svg';

import '../scss/styles-index.scss';

import notFoundErrorPic from '../img/static/not-found-error.png';
import serverErrorPic from '../img/static/server-error.png';

import validateRequest from './utils/validate-request';
import getDatesForNewsApi from './utils/get-dates-for-news-api';
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

const newsApi = new NewsApi(getDatesForNewsApi);
const preloader = new Preloader();
const error = new Error(notFoundErrorPic, serverErrorPic);
const resultsContainer = new ResultsContainer();
const finderInput = new FinderInput();
const dataStorage = new DataStorage();
const articles = new Articles(formatDate);
const showMoreButton = new ShowMoreButton(articles);


const finderSearch = new FinderSearch(validateRequest, newsApi, preloader, error, resultsContainer, finderInput, dataStorage, articles, showMoreButton);
finderSearch.init();

if (sessionStorage.newsData) {
  const request = dataStorage.getData('request');
  const newsData = dataStorage.getData('newsData');
  document.querySelector('.finder__input').value = request;
  resultsContainer.bindToDom();
  articles.render(newsData.articles);
  if (document.querySelector('.results__button')) {
    showMoreButton.init(newsData.articles);
  }
}
