export default function getDatesForNewsApi() {
  const requestPeriodPerDays = 6;
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const currentDate = new Date();
  const lastDate = new Date(currentDate - (requestPeriodPerDays * millisecondsPerDay));

  const fromDate = formatDate(lastDate);
  const toDate = formatDate(currentDate);
  
  return [fromDate, toDate];
}

function formatDate(date) {
  const currentYear = `${date.getFullYear()}`;
  const currentMonth = String((date.getMonth() + 1)).padStart(2, '0');
  const currentDay = String(date.getDate()).padStart(2, '0');
  
  return `${currentYear}-${currentMonth}-${currentDay}`;
}
