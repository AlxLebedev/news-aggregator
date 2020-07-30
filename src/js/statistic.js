import '../img/svg/common/fb.svg';
import '../img/svg/common/github.svg';

import '../scss/styles-stat.scss';

import DataStorage from './Modules/DataStorage';

// import Analytics from './Modules/Analytics';

const dataStorage = new DataStorage();

if (sessionStorage.newsData) {
  const request = dataStorage.getData('request');
  const newsData = dataStorage.getData('newsData');
  console.log(request);
  console.log(newsData);
}

// if (sessionStorage.newsData && sessionStorage.userQuery) {
//   const newsData = JSON.parse(sessionStorage.getItem('newsData'));
//   const userQuery = sessionStorage.getItem('userQuery');
//   const analytics = new Analytics(newsData, userQuery);

//   analytics.init();
// }
