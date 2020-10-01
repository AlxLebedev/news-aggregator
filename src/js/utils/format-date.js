/**
 * Formats the string with date from JSON file to format within design
 * @param {String} date Date of news publication (string from JSON file)
 * @returns {String} Date of news publication within design format
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
