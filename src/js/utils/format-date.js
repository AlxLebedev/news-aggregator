export default function formatDate(date) {
  const currentDate = new Date(date);

  const monthes = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ];

  const currentDay = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : `${currentDate.getDate()}`;
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = `${currentDate.getFullYear()}`;

  return `${currentDay} ${monthes[currentMonthIndex]}, ${currentYear}`;
}
