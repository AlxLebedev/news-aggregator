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
    this.resultsMarkup = null;
    this.resulstContentElement = null;
    this.articlesContainer = null;
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

  renderResultsContent(news) {
    const articles = news.articles;
    this.resultsMarkup = this.markup.getResultsMarkup();
    this.resultsBlock.insertAdjacentHTML('afterbegin', this.resultsMarkup);
    this.renderArticles(articles);
  }

  cleanResultsContent() {
    let child =  this.resultsBlock.firstChild;
    while(child) {
      this.resultsBlock.removeChild(child);
      child = this.resultsBlock.firstChild;
    }
  }

  renderArticles(articles) {
    const articlesArray = articles;
    console.log(articlesArray);
    const articleData = {
      image: null,
      date: null,
      title: null,
      content: null,
      owner: null,
      url: null,
    }
    for (let article of articlesArray) {
      articleData.image = article.urlToImage;
      articleData.date = this.dates.formatDate(article.publishedAt);
      articleData.title = article.title;
      articleData.content = article.description;
      articleData.owner = article.source.name;
      articleData.url = article.url;

      const articleMarkup = this.markup.getArticleMarkup(articleData);
      this.articlesContainer = document.querySelector('.results__articles');
      this.articlesContainer.insertAdjacentHTML('beforeend', articleMarkup);
    }
  }
}
