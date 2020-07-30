import '../img/svg/common/arrow.svg';
import '../img/svg/common/fb.svg';
import '../img/svg/common/github.svg';

import '../scss/styles-index.scss';

import notFoundPic from '../img/static/not-found_v1.png';
import serverError from '../img/static/server-error.png';


import validateRequest from './utils/validate-request';
import getDatesForNewsApi from './utils/get-dates-for-news-api';
import NewsApi from './Modules/NewsApi';
import Preloader from './components/Preloader';
import Error from './components/Error';
import ResultsContainer from './components/ResultsContainer';
import FinderInput from './components/FinderInput';
import FinderSearch from './components/FinderSearch';
import DataStorage from './Modules/DataStorage';
import Articles from './components/Articles';
import formatDate from './utils/format-date';

const newsApi = new NewsApi(getDatesForNewsApi);
const preloader = new Preloader();
const error = new Error(notFoundPic, serverError);
const resultsContainer = new ResultsContainer();
const dataStorage = new DataStorage();
const finderInput = new FinderInput();
const articles = new Articles(formatDate);


const finderSearch = new FinderSearch(validateRequest, newsApi, preloader, error, resultsContainer, finderInput, dataStorage, articles);
finderSearch.init();

if (sessionStorage.newsData) {
  const request = dataStorage.getData('request');
  const newsData = dataStorage.getData('newsData');
  document.querySelector('.finder__input').value = request;
  // console.log(request);
  // console.log(newsData);
}
