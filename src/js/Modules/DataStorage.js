export default class DataStorage {
  constructor() {}

  setData(name, data) {
    typeof data === 'String' ? sessionStorage.setItem(name, data) : sessionStorage.setItem( name, JSON.stringify(data) );
  }

  getData(name) {
    try {
      const data = typeof sessionStorage.getItem(name) === 'String' ? sessionStorage.getItem(name) : JSON.parse( sessionStorage.getItem(name) );
      return data;
    } catch(e) {
      console.log(e);
      return 'Error parse JSON from SessionStorage';
    }
  }

  addToLocalStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  getLocalStorageData(name) {
    try {
      const data = JSON.parse(localStorage.getItem(name));
      return data;
    } catch(e) {
      console.log(e);
      return 'Error parse JSON from LocalStorage';
    }
  }
}
