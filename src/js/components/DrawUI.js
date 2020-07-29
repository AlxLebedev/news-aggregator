import Slider from './Slider';
import Dates from '../utils/Dates';

export default class DrawUI {
  constructor() {
    this.dates = new Dates();
    this.finderSearchField = document.querySelector('.finder__search');
    this.resultsBlock = document.querySelector('.results');
    this.resultsTemplate = document.getElementById('results-template');
    this.preloaderElement = null;
    this.preloaderTemplate = document.getElementById('preloader-template');
    this.notFoundTemplate = document.getElementById('not-found-template');
    this.serverErrorTemplate = document.getElementById('server-error-template');
    this.slideTemplate = document.getElementById('swiper-slide-template');
    this.articleTemplate = document.getElementById('article-template');
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
    const preloader = this.preloaderTemplate.content.cloneNode(true);
    this.resultsBlock.appendChild(preloader);
  }

  hidePreloader() {
    this.preloaderElement = document.querySelector('.preloader');
    this.preloaderElement.remove();
  }

  showErrorWarning(errorType) {
    const error = errorType === 'notFound' ? this.notFoundTemplate.content.cloneNode(true) : this.serverErrorTemplate.content.cloneNode(true);
    this.resultsBlock.appendChild(error);
  }

  renderCommits(response) {
    if (typeof(response) === 'String') {
      swiperWrapper.insertAdjacentHTML('beforeend', `<div>${response}</div>`);
      return;
    }

    const commitArray = response;

    for ( let commit of commitArray) {
      const slideTemplate = this.slideTemplate.content.cloneNode(true);
      slideTemplate.querySelector('.commit__date').innerText = this.dates.formatDate(commit.commit.author.date);
      slideTemplate.querySelector('.developer__image').src = commit.author.avatar_url;
      slideTemplate.querySelector('.developer__name').innerText = commit.commit.author.name;
      slideTemplate.querySelector('.developer__mail').innerText = commit.commit.author.email;
      slideTemplate.querySelector('.commit__message').innerText = commit.commit.message;
      
      const swiperWrapper = document.querySelector('.swiper-wrapper');
      swiperWrapper.append(slideTemplate);
    }
    const slider = new Slider();
    slider.init();
  }

  renderResultsContent(news) {
    this.articles = news.articles;
    const resultsContainer = this.resultsTemplate.content.cloneNode(true);
    this.resultsBlock.appendChild(resultsContainer);

    this.showMoreButton = document.querySelector('.results__button');
    this.showMoreButton.addEventListener('click', () => {
      this.articles.splice(0, 3);
      this.renderArticles();
      if (this.articles.length <= 3) {
        this.showMoreButton.remove();
      }
    });
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
    const articlesArrayLength = articlesArray.length;
  
    let firstArticle = 0;
    let lastArticle = articlesArrayLength < 3 ? articlesArrayLength - 1 : 2;

    for (let i = firstArticle; i <= lastArticle; i += 1) {
      const articleTemplate = this.articleTemplate.content.cloneNode(true);
      let currentDate = this.dates.formatDate(articlesArray[i].publishedAt);
      articleTemplate.querySelector('.article__image').src = articlesArray[i].urlToImage;
      articleTemplate.querySelector('.article__date').innerText = currentDate;
      articleTemplate.querySelector('.article__title').innerText = articlesArray[i].title;
      articleTemplate.querySelector('.article__content').innerText = articlesArray[i].description;
      articleTemplate.querySelector('.article__owner').innerText = articlesArray[i].source.name;
      articleTemplate.querySelector('.article__link').href = articlesArray[i].url;

      articleTemplate.querySelector('.article__image').onerror = function() {
        this.remove();
      }

      const articlesContainer = document.querySelector('.results__articles');
      articlesContainer.append(articleTemplate);
    }

    if (this.articles.length <= 3) {
      this.showMoreButton.remove();
    }
  }

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
      value.innerText = newsQuantity <= 10 ? (counter + quarterOfNewsQuantity).toFixed(1) : Math.round(counter + quarterOfNewsQuantity);
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
