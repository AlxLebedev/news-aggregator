import DrawUI from '../components/DrawUI';
import Dates from '../utils/Dates';

export default class Analytics {
  constructor(data, userQuery) {
    this.drawUI = new DrawUI();
    this.dates = new Dates();
    this.data = data;
    this.query = userQuery;
    this.referencesInHeadlines = null;
  }

  init() {
    console.log(this.data);
    this.referencesInHeadlines = this.getReferencesInHeadlines();
    this.drawUI.showStatHeading(this.query, +this.data.totalResults, this.referencesInHeadlines);

    const days = this.dates.getDaysForAnalytics();
    this.drawUI.renderDaysForAnalytics(days);
  }

  getReferencesInHeadlines() {
    const headlines = [];
    const regExp = new RegExp(this.query.toLowerCase(), 'g');
    for (let artickle of this.data.articles) {
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
