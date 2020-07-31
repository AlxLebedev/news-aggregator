export default function getRequestMonth(dates) {
  const datesArray = dates;
  const monthesArray = [];
  const monthesNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ];

  datesArray.map( date => monthesArray.push(monthesNames[date.getMonth()]) );

  const result = Array.from(new Set(monthesArray));
  return result.length > 1 ? result.join(' - ') : String(result);
}
