import '../img/svg/common/fb.svg';
import '../img/svg/common/github.svg';

import '../scss/styles-stat.scss';

import DataStorage from './Modules/DataStorage';
import Analytics from './components/Analytics';

const dataStorage = new DataStorage();
const analytics = new Analytics();

if (sessionStorage.newsData) {
  const request = dataStorage.getData('request');
  const newsData = dataStorage.getData('newsData');
  analytics.init(request, newsData)
}
