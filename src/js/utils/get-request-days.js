export default function getRequestDays(dates) {
  const datesArray = dates;
  const daysNames = [
    'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб',
  ]
  
  const days = [];
  for (let date of datesArray) {
    const dayNumber = date.getDate();
    const dayIndex = date.getDay();
    days.push(`${dayNumber}, ${daysNames[dayIndex]}`);
  };

  return days;
}
