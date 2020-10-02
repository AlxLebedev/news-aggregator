/**
 * Проверяет валидацию закешированных новостей.
 * @param {Object} localData Объект из localStorage, содержащий: ответ сервера и дату сохранения ответа сервера в localStorage
 * @param {number} localData.date Таймстемп даты сохранения ответа сервера в localStorage
 * @param {Object} localData.data Ответ сервера
 * @returns {boolean} Возвращает true/false в зависимости от того валиден кеш или нет
 */

export default function validateLocalData(localData) {
  const currentDate = Date.now();
  const localDataDate = localData.date;
  const localDataAge = currentDate - localDataDate;
  
  /** @type {number} Количество минут в жизненном цикле новостей*/
  const minutesInLifeCycle = 1;
  const millisecondsPerMinute = 60000;
  const lifeCycleOfLocalData = millisecondsPerMinute * minutesInLifeCycle;

  return !(localDataAge > lifeCycleOfLocalData);
}
