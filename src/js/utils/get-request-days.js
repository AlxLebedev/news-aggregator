/**
 * Извлекает из перечня дат число и день недели. Используется для представления дат на странице аналитики в графике
 * @param {Date[]} dates Массив дат
 * @returns {string[]} Массив строк в виде "25, пт". Содержит все даты от: 'сегодня минус 6 дней назад' до 'сегодня'
 */

export default function getRequestDays(dates) {
  const datesArray = dates;

  const dayFormatterOptions = { day: '2-digit' };
  const dayFormatter = new Intl.DateTimeFormat('ru-RU', dayFormatterOptions);

  const weekdayFormatterOptions = { weekday: 'short' };
  const weekdayFormatter = new Intl.DateTimeFormat('ru-RU', weekdayFormatterOptions);

  const days = [];
  datesArray.map((date) => days.push(`${dayFormatter.format(date)}, ${weekdayFormatter.format(date)}`));

  return days;
}
