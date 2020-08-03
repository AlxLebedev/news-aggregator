export default function getRequestMonth(dates) {
  const datesArray = dates;
  const monthesArray = [];

  const formatterOptions = {
    month: "long"
  };
  const formatter = new Intl.DateTimeFormat('ru-RU', formatterOptions);

  datesArray.map( date => monthesArray.push(formatter.format(date)) );

  const result = Array.from(new Set(monthesArray));
  return result.length > 1 ? result.join(' - ') : String(result);
}
