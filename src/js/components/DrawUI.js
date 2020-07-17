import Slider from './Slider';
import Markup from './Markup';
import Dates from '../utils/Dates';

export default class DrawUI {
  constructor() {
    this.slider = null;
    this.markup = new Markup();
    this.dates = new Dates();
    this.finderSearchField = document.querySelector('.finder__search');
    this.resultsBlock = document.querySelector('.results');
    this.preloaderMarkup = null;
    this.errorMarkup = null;
    this.errorElement = null;
    this.preloaderElement = null;
    this.swiperWrapper = document.querySelector('.swiper-wrapper');
    this.commitArray = null;
  }

  showHint() {
    if (!this.finderSearchField.classList.contains('finder__search--invalid')) {
      this.finderSearchField.classList.add('finder__search--invalid');
    }
  }

  hideHint() {
    if (this.finderSearchField.classList.contains('finder__search--invalid')) {
      this.finderSearchField.classList.remove('finder__search--invalid');
    }
  }

  showPreloader() {
    this.preloaderMarkup = this.markup.getPreloaderMarkup();
    this.resultsBlock.insertAdjacentHTML('afterbegin', this.preloaderMarkup);
  }

  hidePreloader() {
    this.preloaderElement = document.querySelector('.preloader');
    this.preloaderElement.remove();
  }

  showErrorWarning(error) {
    if (error == 'notFound') {
      this.errorMarkup = this.markup.getNotFoundMarkup();
    } else if (error == 'server') {
      this.errorMarkup = this.markup.getServerErrorMarkup();
    }
    this.resultsBlock.insertAdjacentHTML('afterbegin', this.errorMarkup);
  }

  hideErrorWarning() {
    this.errorElement = document.querySelector('.error');
    if (this.errorElement) {
      this.errorElement.remove();
    }
  }

  renderCommits(commits) {
    this.commitArray = commits;
    const commitData = {
      date: null,
      avatar: null,
      name: null,
      email: null,
      message: null
    };
    for (let commit of this.commitArray) {
      commitData.date = this.dates.formatDate(commit.commit.author.date);
      commitData.avatar = commit.author.avatar_url;
      commitData.name = commit.commit.author.name;
      commitData.email = commit.commit.author.email;
      commitData.message = commit.commit.message;
      
      const commitMarkup = this.markup.getCommitMarkup(commitData);
      this.swiperWrapper.insertAdjacentHTML('beforeend', commitMarkup);
    }

    this.slider = new Slider();
    this.slider.init();
  }
}
