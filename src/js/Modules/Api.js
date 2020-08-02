export default class Api {
  constructor() {}

  async fetchData(url, param) {
    try {
      let response = param === undefined ? await fetch(url) : await fetch(url, param);
      if (response.ok) {
        try {
          return await response.json();
        } catch(e) {
          return 'bad-response';
        }
      } else {
        console.log(response.status);
        return response.status;
      }
    } catch(e) {
      return 'server-error';
    }
  }
}
