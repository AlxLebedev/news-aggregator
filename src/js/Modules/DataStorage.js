export default class DataStorage {
  constructor() {
    this.currentDate = null;
    this.data = null;
  }

  addToLocalStorage(name, data) {
    this.currentDate = Date.now();
    const localData = {
      date: this.currentDate,
      data,
    };
    localStorage.setItem(name, JSON.stringify(localData));
  }

  getLocalStorageData(name) {
    try {
      this.data = JSON.parse(localStorage.getItem(name));
      return this.data;
    } catch (e) {
      console.log(e);
      return 'Error parse JSON from LocalStorage';
    }
  }
}
