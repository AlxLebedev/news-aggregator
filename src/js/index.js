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
import Finder from './components/Finder';

const newsApi = new NewsApi();
const preloader = new Preloader();
const error = new Error(notFoundPic, serverError);

const finder = new Finder(validateRequest, getDatesForNewsApi, newsApi, preloader, error);
finder.init();

if (sessionStorage.newsData) {
  document.querySelector('.finder__input').value = sessionStorage.getItem('userQuery');
  const newsData = JSON.parse(sessionStorage.getItem('newsData'));
  console.log(newsData);
}
