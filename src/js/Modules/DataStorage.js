export default class DataStorage {
  constructor() {}

  addToLocalStorage(name, data) {
    const currentDate = Date.now();
    const localData = {
      date: currentDate,
      data: data
    }
    localStorage.setItem(name, JSON.stringify(localData));
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
