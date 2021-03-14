/**
 * Проходится по массиву дат, выбирает месяца и складывает их в отдельный массив.
 * Полученный массив конвертируется в сет уникальных значений - исключаем повторения месяцев.
 * Если месяц в сете один - возвращается он. Если сет содержит 2 месяца (имеются даты сентября и октября) - возвращаются оба
 * в виде строки 'сентябрь-октябрь'
 * @param {Date[]} dates Массив дат от сегодня минус 6 дней до сегодня
 * @returns {string} название месяца или название месяцев (если их два в сете)
 */

export default function getRequestMonth(dates) {
  const datesArray = dates;
  const monthesArray = [];

  const formatterOptions = {
    month: 'long',
  };
  const formatter = new Intl.DateTimeFormat('ru-RU', formatterOptions);

  datesArray.map((date) => monthesArray.push(formatter.format(date)));

  const result = Array.from(new Set(monthesArray));
  return result.length > 1 ? result.join(' - ') : String(result);
}
