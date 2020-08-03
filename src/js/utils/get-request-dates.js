export default function getRequestDates() {
  const requestPeriodInDays = 6;
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const currentDate = new Date();
  const lastDate = new Date(currentDate - (requestPeriodInDays * millisecondsPerDay));
  const formatter = new Intl.DateTimeFormat('fr-ca');

  const fromDate = formatter.format(lastDate);
  const toDate = formatter.format(currentDate);
  
  return [fromDate, toDate];
}
