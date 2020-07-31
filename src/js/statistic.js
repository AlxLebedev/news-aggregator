import '../img/svg/common/fb.svg';
import '../img/svg/common/github.svg';

import '../scss/styles-page-statistic.scss';

import DataStorage from './Modules/DataStorage';
import Statistic from './components/Statistic';
import Graph from './components/Graph';

import getMentionsInTitles from './utils/get-mentions-in-titles';
import getRequestDates from './utils/get-request-dates';
import getDatesRange from './utils/get-dates-range';
import getRequestMonth from './utils/get-request-month';
import getRequestDays from './utils/get-request-days';

const dataStorage = new DataStorage();

if (sessionStorage.newsData) {
  const request = dataStorage.getData('request');
  const newsData = dataStorage.getData('newsData');
  const statistic = new Statistic(request, newsData, getMentionsInTitles);
  const graph = new Graph(request, newsData, getRequestDates, getDatesRange, getRequestMonth, getRequestDays);
  statistic.init();
  graph.init();
}
