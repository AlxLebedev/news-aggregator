import '../img/svg/common/arrow.svg';
import '../img/svg/common/fb.svg';
import '../img/svg/common/github.svg';
import '../img/svg/index/not-found.svg';
import '../img/svg/index/server-error.svg';

import '../scss/styles-index.scss';

import validateRequest from './utils/validate-request';
import getDatesForNewsApi from './utils/get-dates-for-news-api';
import NewsApi from './Modules/NewsApi';
import Finder from './components/Finder';

const newsApi = new NewsApi();

const finder = new Finder(validateRequest, getDatesForNewsApi, newsApi);
finder.init();

if (sessionStorage.newsData) {
  document.querySelector('.finder__input').value = sessionStorage.getItem('userQuery');
  const newsData = JSON.parse(sessionStorage.getItem('newsData'));
  console.log(newsData);
}
