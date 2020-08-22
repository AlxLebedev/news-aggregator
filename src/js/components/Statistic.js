export default class Statistic {
  constructor(request, newsData, getMentionsInTitles) {
    this.request = request;
    this.news = newsData;
    this.getMentionsInTitles = getMentionsInTitles;
    this.statisticRequestElement = null;
    this.statisticNewsPerWeekElement = null;
  }

  init() {
    this.renderRequest(this.request);
    this.renderNewsPerWeek(this.news.articles.length);
    this.renderMentionsInTitles(this.request, this.news.articles);
  }

  renderRequest(request) {
    this.statisticRequestElement = document.querySelector('.statistic__request');
    this.statisticRequestElement.innerText = `«${request}»`;
  }

  renderNewsPerWeek(newsQuantity) {
    this.statisticNewsPerWeekElement = document.getElementById('statistic-news-per-week');
    this.statisticNewsPerWeekElement.innerText = newsQuantity;
  }

  renderMentionsInTitles(request, articles) {
    const mentionsInTitles = this.getMentionsInTitles(request, articles);
    const mentionsInTitlesElement = document.getElementById('statistic-mentions-in-titles');
    mentionsInTitlesElement.innerText = mentionsInTitles;
  }
}
