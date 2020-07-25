import GetNews from './GetNews';

export default class AddListeners {
  constructor(drawUI) {
    this.drawUI = drawUI;
    this.getNews = new GetNews(this.drawUI);
    this.finderInput = document.querySelector('.finder__input');
    this.finderButton = document.querySelector('.finder__button');
    this.userQuery = null;
  }

  init() {
    this.finderButton.addEventListener( 'click', () => this.sendQuery() );

    this.finderInput.addEventListener( 'input', () => this.drawUI.hideHint() );

    this.finderInput.addEventListener('keypress', (event) => { if (event.key === "Enter") this.sendQuery() } );
  }

  sendQuery() {
    this.userQuery = this.finderInput.value;
    this.getNews.get(this.userQuery);
    // this.finderInput.value = '';
  }
}
