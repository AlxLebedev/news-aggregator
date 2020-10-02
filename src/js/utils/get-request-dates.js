/**
 * Функция испольняется без параметров. В момент исполнения вычисляет текущую дату. Относительно ее вычисляет дату, которая была 6 дней назад.
 * @returns {string[]} Массив из двух строк в виде даты формата 2020-10-01): [сегодня минус 6 ней назад, сегодня]
 */

export default function getRequestDates() {
  const requestPeriodInDays = 6;
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const currentDate = new Date();
  const lastDate = new Date(currentDate - (requestPeriodInDays * millisecondsPerDay));
  const formatter = new Intl.DateTimeFormat('fr-ca');

  /** @type {string} */
  const fromDate = formatter.format(lastDate);
  /** @type {string} */
  const toDate = formatter.format(currentDate);

  return [fromDate, toDate];
}
