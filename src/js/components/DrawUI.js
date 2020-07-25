import Slider from './Slider';
import Markup from './Markup';
import Dates from '../utils/Dates';

export default class DrawUI {
  constructor() {
    this.markup = new Markup();
    this.dates = new Dates();
    this.finderSearchField = document.querySelector('.finder__search');
    this.resultsBlock = document.querySelector('.results');
    this.errorMarkup = null;
    this.preloaderElement = null;
    this.articles = null;
    this.showMoreButton = null;
    this.daysElements = Array.from(document.querySelectorAll('.table__day'));
    this.monthElement = document.querySelector('.table__title-month');
    this.referencesValuesElements = Array.from(document.querySelectorAll('.table__value'));
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
    const preloaderMarkup = this.markup.getPreloaderMarkup();
    this.resultsBlock.insertAdjacentHTML('afterbegin', preloaderMarkup);
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

  renderCommits(response) {
    if (typeof(response) === 'String') {
      swiperWrapper.insertAdjacentHTML('beforeend', `<div>${response}</div>`);
      return;
    }
    const commitArray = response;
    const commitData = {
      date: null,
      avatar: null,
      name: null,
      email: null,
      message: null
    };
    for (let commit of commitArray) {
      commitData.date = this.dates.formatDate(commit.commit.author.date);
      commitData.avatar = commit.author.avatar_url;
      commitData.name = commit.commit.author.name;
      commitData.email = commit.commit.author.email;
      commitData.message = commit.commit.message;
      
      const commitMarkup = this.markup.getCommitMarkup(commitData);
      const swiperWrapper = document.querySelector('.swiper-wrapper');
      swiperWrapper.insertAdjacentHTML('beforeend', commitMarkup);
    }

    const slider = new Slider();
    slider.init();
  }

  renderResultsContent(news) {
    this.articles = news.articles;
    const resultsMarkup = this.markup.getResultsMarkup();
    this.resultsBlock.insertAdjacentHTML('afterbegin', resultsMarkup);

    this.showMoreButton = document.querySelector('.results__button');
    this.showMoreButton.addEventListener('click', () => {
      this.articles.splice(0, 3);
      this.renderArticles();
    });
    if (this.articles.length <= 3) {
      this.showMoreButton.remove();
    }
    this.renderArticles();
  }

  cleanResultsContent() {
    let child =  this.resultsBlock.firstChild;
    while(child) {
      this.resultsBlock.removeChild(child);
      child = this.resultsBlock.firstChild;
    }
  }

  renderArticles() {
    const articlesArray = this.articles;
    const articleData = {
      image: null,
      date: null,
      title: null,
      content: null,
      owner: null,
      url: null,
    }
    const articlesArrayLength = articlesArray.length;
    let firstArticle = 0;
    let lastArticle = null;
    if (articlesArrayLength < 3) {
      lastArticle = articlesArrayLength - 1;
    } else {
      lastArticle = 2;
    }

    for (let i = firstArticle; i <= lastArticle; i += 1) {
      articleData.image = articlesArray[i].urlToImage;
      articleData.date = this.dates.formatDate(articlesArray[i].publishedAt);
      articleData.title = articlesArray[i].title;
      articleData.content = articlesArray[i].description;
      articleData.owner = articlesArray[i].source.name;
      articleData.url = articlesArray[i].url;

      const articleMarkup = this.markup.getArticleMarkup(articleData);
      const articlesContainer = document.querySelector('.results__articles');
      articlesContainer.insertAdjacentHTML('beforeend', articleMarkup);
    }

    if (this.articles.length === 1) {
      this.showMoreButton.remove();
    }
  }

  /** 
   * Знаю, что ESLint ругается, если в методе класса не использован this. Поэтому везде я доавлял его, а тут не стал и решил спросить:
   * как быть если в this нет необходимости? Значит не правильно код выстроил?
   * 
  */
  showStatHeading(query, totalResults, referencesTitle) {
    const userQueryElement = document.querySelector('.stat__request');
    const newsPerWeekElement = document.getElementById('news-per-week');
    const newsInTitleElement = document.getElementById('news-in-title');

    userQueryElement.innerText = `«${query}»`;
    newsPerWeekElement.innerText = totalResults.toLocaleString('ru');
    newsInTitleElement.innerText = referencesTitle.toLocaleString('ru');
  }

  renderDaysForAnalytics(days) {
    for (let i = 0; i < this.daysElements.length; i += 1) {
      this.daysElements[i].innerText = days[i];
    }
  }

  renderMonthesForAnalytics(monthes) {
    this.monthElement.innerText = `(${monthes})`;
  }

  renderReferencesValues(values, newsQuantity) {
    const topBarValues = document.querySelectorAll('.table__bar-value-top');
    const bottomBarValues = document.querySelectorAll('.table__bar-value-bottom');
    const quarterOfNewsQuantity = newsQuantity / 4;

    let counter = null;
    for (let value of topBarValues) {
      value.innerText = counter + quarterOfNewsQuantity;
      counter += quarterOfNewsQuantity;
    }

    for (let i = 0; i < bottomBarValues.length; i += 1) {
      bottomBarValues[i].innerText = topBarValues[i].innerText;
    }

    for (let i = 0; i < this.referencesValuesElements.length; i += 1) {
      this.referencesValuesElements[i].innerText = `${values[i] === null ? `0` : values[i]}`;
      this.referencesValuesElements[i].style.width = `${values[i] === null ? '16px' : `${(values[i] / newsQuantity) * 100}%`}`;
    }
  }
}
