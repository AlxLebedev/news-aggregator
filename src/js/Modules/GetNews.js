import getDates from '../utils/getDates';

export default class GetNews {
  constructor(drawUI) {
    this.drawUI = drawUI;
    this.apiKey = '7c22611ba74c47b9bb7bab94a85a00f9';
    this.userQuery = null;
    this.fromDate = null;
    this.toDate = null;
    this.url = null;
  }

    get(userQuery) {
      this.userQuery = userQuery;
      [this.fromDate, this.toDate] = getDates();
      this.url = `http://newsapi.org/v2/everything?q=${this.userQuery}&from=${this.fromDate}&to=${this.toDate}&pageSize=10&apiKey=${this.apiKey}`;
      console.log(this.fromDate);
      console.log(this.toDate);
      console.log(`This is user query - ${this.userQuery}`);
      console.log(this.url);
    }

}
