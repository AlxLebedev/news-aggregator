/**
 * Class DataStorage добавляет (извлекает) в (из) localStorage объект, содержащий ответ сервера на пользовательский запрос и дату помещения в
 * localStorage этого объекта
 */

export default class DataStorage {
  constructor() {
    this.currentDate = null;
    this.data = null;
  }

  /**
   * Добавляет в localStorage данные
   * @param {string} name Информационный запрос пользователя 
   * @param {Object} data Ответ сервера на информационный запрос пользователя
   */

  addToLocalStorage(name, data) {
    this.currentDate = Date.now();
    const localData = {
      date: this.currentDate,
      data,
    };
    localStorage.setItem(name, JSON.stringify(localData));
  }

  /**
   * Извлекает данные из localStorage
   * @param {string} name Ключ localStorage, соответствующий поисковому запросу пользователя 
   * @returns {Object | string} Объект, хранящийся в localStorage по указанному ключу или сообщение об ошибке в виде строки
   */

  getLocalStorageData(name) {
    try {
      this.data = JSON.parse(localStorage.getItem(name));
      return this.data;
    } catch (e) {
      return 'Error parse JSON from LocalStorage';
    }
  }
}
