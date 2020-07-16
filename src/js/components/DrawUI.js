import Markup from './Markup';

export default class DrawUI {
  constructor() {
    this.markup = new Markup();
    this.finderSearchField = document.querySelector('.finder__search');
    this.resultsBlock = document.querySelector('.results');
    this.preloaderMarkup = null;
    this.preloaderElement = null;
    this.swiperWrapper = document.querySelector('.swiper-wrapper');
    this.commitArray = null;
  }

  showError() {
    if (!this.finderSearchField.classList.contains('finder__search--invalid')) {
      this.finderSearchField.classList.add('finder__search--invalid');
    }
  }

  hideError() {
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

  renderCommits(commits) {
    this.commitArray = commits;
    console.log(this.commitArray);
    const commitData = {
      date: null,
      avatar: null,
      name: null,
      email: null,
      message: null
    };
    for (let commit of this.commitArray) {
      commitData.date = commit.commit.author.date;
      commitData.avatar = commit.author.avatar_url;
      commitData.name = commit.commit.author.name;
      commitData.email = commit.commit.author.email;
      commitData.message = commit.commit.message;
      
      const commitMarkup = this.markup.getCommitMarkup(commitData);
      this.swiperWrapper.insertAdjacentHTML('afterbegin', commitMarkup);
    }
  }
}
