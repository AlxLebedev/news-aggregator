import DrawUI from '../components/DrawUI';

export default class Analytics {
  constructor(data, userQuery) {
    this.drawUI = new DrawUI();
    this.data = data;
    this.query = userQuery;
    this.referencesInHeadlines = null;
  }

  init() {
    this.referencesInHeadlines = this.getReferencesInHeadlines();
    this.drawUI.showStatHeading(this.query, +this.data.totalResults, this.referencesInHeadlines);
  }

  getReferencesInHeadlines() {
    const headlines = [];
    const regExp = new RegExp(this.query.toLowerCase(), 'g');
    console.log(regExp);
    for (let artickle of this.data.articles) {
      headlines.push(artickle.title);
    }
    console.log(headlines);
    const result = String(headlines).toLowerCase().match(regExp);
    if (result) {
      return result.length;
    } else {
      return 0;
    }
  }
}
