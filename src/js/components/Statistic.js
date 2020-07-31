export default class Statistic {
  constructor(request, newsData, getMentionsInTitles) {
    this.request = request;
    this.news = newsData;
    this.getMentionsInTitles = getMentionsInTitles;
  }

  init() {
    this.renderRequest(this.request);
    this.renderNewsPerWeek(this.news.articles.length);
    this.renderMentionsInTitles(this.request, this.news.articles);
    console.log(this.news);
  }

  renderRequest(request) {
    const statisticRequestElement = document.querySelector('.statistic__request');
    statisticRequestElement.innerText = `«${request}»`;
  }

  renderNewsPerWeek(newsQuantity) {
    const statisticNewsPerWeekElement = document.getElementById('statistic-news-per-week');
    statisticNewsPerWeekElement.innerText = newsQuantity;
  }

  renderMentionsInTitles(request, articles) {
    const mentionsInTitles = this.getMentionsInTitles(request, articles);
    const mentionsInTitlesElement = document.getElementById('statistic-mentions-in-titles');
    mentionsInTitlesElement.innerText = mentionsInTitles;
  }
}
