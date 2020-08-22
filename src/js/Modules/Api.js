export default class Api {
  constructor() {
    this.response = null;
  }

  async fetchData(url, param) {
    try {
      this.response = param === undefined ? await fetch(url) : await fetch(url, param);
      if (this.response.ok) {
        try {
          return await this.response.json();
        } catch (e) {
          return 'bad-response';
        }
      } else {
        return this.response.status;
      }
    } catch (e) {
      return 'server-error';
    }
  }
}
