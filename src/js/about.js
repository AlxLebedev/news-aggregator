import '../img/svg/common/arrow.svg';
import '../img/svg/common/fb.svg';
import '../img/svg/common/github.svg';
import '../img/svg/about/css.svg';
import '../img/svg/about/html.svg';
import '../img/svg/about/js.svg';
import '../img/svg/about/webpack.svg';

import 'swiper/swiper-bundle.css';
import '../scss/styles-page-about.scss';

import GitApi from './Modules/GitApi';
import Slider from './components/Slider';
import formatDate from './utils/format-date';
import Commits from './components/Commits';
import addParamsToLinks from './utils/add-params-to-links';

const urlParameters = new URL(location.href).searchParams;
const request = urlParameters.get('request');

if (request) {
  const internalsLinks = Array.from(document.querySelectorAll('.internals-links'));
  addParamsToLinks(internalsLinks, request);
}

const gitApi = new GitApi();
const slider = new Slider();

const commits = new Commits(gitApi, slider, formatDate);
commits.init();
