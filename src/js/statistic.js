import '../img/svg/common/fb.svg';
import '../img/svg/common/github.svg';

import '../scss/styles-page-statistic.scss';

import DataStorage from './Modules/DataStorage';
import Statistic from './components/Statistic';
import Graph from './components/Graph';

import getMentionsInTitles from './utils/get-mentions-in-titles';

const dataStorage = new DataStorage();

if (sessionStorage.newsData) {
  const request = dataStorage.getData('request');
  const newsData = dataStorage.getData('newsData');
  const statistic = new Statistic(request, newsData, getMentionsInTitles);
  const graph = new Graph(request, newsData);
  statistic.init();
  graph.init();
}
