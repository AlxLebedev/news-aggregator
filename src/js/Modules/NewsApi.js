export default class NewsApi {
  constructor() {

  }

  async fetchNews(url) {
    let response = await fetch(url, {
      headers: {
        'X-Api-Key': '7c22611ba74c47b9bb7bab94a85a00f9'
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      console.log('server error');
    }
  }
}
