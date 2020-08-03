export default function getRequestDays(dates) {
  const datesArray = dates;

  const dayFormatterOptions = { day: "2-digit" };
  const dayFormatter = new Intl.DateTimeFormat('ru-RU', dayFormatterOptions);

  const weekdayFormatterOptions = { weekday: "short" };
  const weekdayFormatter = new Intl.DateTimeFormat('ru-RU', weekdayFormatterOptions);
  
  const days = [];
  datesArray.map( date => days.push(`${dayFormatter.format(date)}, ${weekdayFormatter.format(date)}`) );

  return days;
}
