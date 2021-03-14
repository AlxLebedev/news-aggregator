/**
 * Форматирует дату, полученную с сервера, в соответствии с представлением в дизайне
 * @param {string} date Дата публикации конкретной новости (строка, полученная из JSON)
 * @returns {string} Дата в формате "22 апреля, 2020"
 */

export default function formatDate(date) {
  const currentDate = new Date(date);

  const formatterOptions = {
    day: '2-digit',
    month: 'long',
  };
  const formatter = new Intl.DateTimeFormat('ru-RU', formatterOptions);

  const formatedDate = formatter.format(currentDate);
  const currentYear = `${currentDate.getFullYear()}`;

  return `${formatedDate}, ${currentYear}`;
}
