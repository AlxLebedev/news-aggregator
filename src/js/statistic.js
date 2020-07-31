import '../img/svg/common/fb.svg';
import '../img/svg/common/github.svg';

import '../scss/styles-page-statistic.scss';

import DataStorage from './Modules/DataStorage';
import Statistic from './components/Statistic';

import getMentionsInTitles from './utils/get-mentions-in-titles';

const dataStorage = new DataStorage();

if (sessionStorage.newsData) {
  const request = dataStorage.getData('request');
  const newsData = dataStorage.getData('newsData');
  const statistic = new Statistic(request, newsData, getMentionsInTitles);
  statistic.init();
}
