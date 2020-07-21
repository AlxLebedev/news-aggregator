import DrawUI from '../components/DrawUI';
import Dates from '../utils/Dates';

export default class Analytics {
  constructor(newsData, userQuery) {
    this.drawUI = new DrawUI();
    this.dates = new Dates();
    this.news = newsData;
    this.query = userQuery;
    this.referencesInHeadlines = null;
  }

  init() {
    console.log(this.news);
    this.referencesInHeadlines = this.getReferencesInHeadlines();
    this.drawUI.showStatHeading(this.query, this.news.articles.length, this.referencesInHeadlines);
    /*
    Для метода выше специально ограничено общее количество новостей (2-ой аргумент) длиной массива с новостями. Иначе
    искажается статистика: totalResults = 21875, а ограничение бесплатного доступа к API - 100.
    */

    const days = this.dates.getDaysForAnalytics();
    this.drawUI.renderDaysForAnalytics(days);

    const monthes = this.dates.getMonthesForAnalytics();
    this.drawUI.renderMonthesForAnalytics(monthes);

    const mentionsByDay = this.dates.getMentionsByDays(this.news.articles);
    this.drawUI.renderMentionsValues(mentionsByDay, this.news.articles.length);
  }

  getReferencesInHeadlines() {
    const headlines = [];
    const regExp = new RegExp(this.query.toLowerCase(), 'g');
    for (let artickle of this.news.articles) {
      headlines.push(artickle.title);
    }
    const result = String(headlines).toLowerCase().match(regExp);
    if (result) {
      return result.length;
    } else {
      return 0;
    }
  }
}
