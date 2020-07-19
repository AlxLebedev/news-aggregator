import DrawUI from '../components/DrawUI';

export default class Analytics {
  constructor(data, userQuery) {
    this.drawUI = new DrawUI();
    this.data = data;
    this.query = userQuery;
  }

  init() {
    this.drawUI.showStatHeading(this.query, +this.data.totalResults, +'322322')
  }
}
