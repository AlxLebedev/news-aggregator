export default class DataStorage {
  constructor() {

  }

  setData(name, data) {
    typeof data === 'String' ? sessionStorage.setItem(name, data) : sessionStorage.setItem( name, JSON.stringify(data) );
  }

  getData(name) {
    const data = typeof sessionStorage.getItem(name) === 'String' ? sessionStorage.getItem(name) : JSON.parse( sessionStorage.getItem(name) );
    return data;
  }
}
