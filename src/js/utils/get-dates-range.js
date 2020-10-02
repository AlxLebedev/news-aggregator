/**
 * Генерирует массив с датами в заданном временном промежутке.
 * Используется для предоставления дат, выводимых на странице аналитики
 * @param {string[]} dates Массив из двух строк в виде дат: 6 дней назад от сегодня, сегодня
 * @returns {Date[]} Массив дат за каждые сутки, начиная от "сегодня - 6 дней назад" до "сегодня"
 */

export default function getDatesRange(dates) {
  const [fromDate, toDate] = dates;

  const startDate = new Date(fromDate);
  const stopDate = new Date(toDate);

  const result = [];
  while (startDate <= stopDate) {
    result.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }

  return result;
}
