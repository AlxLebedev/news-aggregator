export default class GetNews {
  constructor(drawUI) {
    this.drawUI = drawUI
    this.userQuery = null;
  }

    get(userQuery) {
      this.userQuery = userQuery;
      console.log(`This is user query - ${this.userQuery}`);
    }

}
