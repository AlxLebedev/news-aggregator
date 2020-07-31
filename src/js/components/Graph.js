export default class Graph {
  constructor(request, newsData) {
    this.request = request;
    this.news = newsData;
  }

  init() {
    this.renderMonth();
  }

  renderMonth() {
    const graphMontElement = document.querySelector('.graph__title-month');
    console.log(graphMontElement)
  }
}
