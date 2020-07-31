import '../img/svg/common/arrow.svg';
import '../img/svg/common/fb.svg';
import '../img/svg/common/github.svg';
import '../img/svg/about/css.svg';
import '../img/svg/about/html.svg';
import '../img/svg/about/js.svg';
import '../img/svg/about/webpack.svg';

import 'swiper/swiper-bundle.css';
import '../scss/styles-page-about.scss';

import Gitapi from './Modules/GitApi';
import Slider from './components/Slider';
import formatDate from './utils/format-date';
import Commits from './components/Commits';

const slider = new Slider();
const gitApi = new Gitapi();

const commits = new Commits(gitApi, slider, formatDate);
commits.init();
