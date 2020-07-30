import '../img/svg/common/arrow.svg';
import '../img/svg/common/fb.svg';
import '../img/svg/common/github.svg';
import '../img/svg/about/css.svg';
import '../img/svg/about/html.svg';
import '../img/svg/about/js.svg';
import '../img/svg/about/webpack.svg';

import 'swiper/swiper-bundle.css';
import '../scss/styles-about.scss';

import Gitapi from './Modules/GitApi';

const gitApi = new Gitapi();

async function showCommits() {
  const commits = await gitApi.fetchCommits();
  console.log(commits);
}

showCommits();
