export default class Api {
  constructor() {

  }

  async fetchData(url, param) {
    let response = param === undefined ? await fetch(url) : await fetch(url, param);
    if (response.ok) {
      return await response.json();
    } else {
      return response.status;
    }
  }
}
