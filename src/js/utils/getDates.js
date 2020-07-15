export default function getDates() {
  const daysAgo = 7;
  const msPerDay = 86400000;
  const currentDate = new Date();
  const lastDate = new Date(currentDate - (daysAgo * msPerDay));

  const currentYear = `${currentDate.getFullYear()}`;
  const currentMonth = currentDate.getMonth() + 1 < 10 ? `0${currentDate.getMonth() + 1}` : `${currentDate.getMonth() + 1}`;
  const currentDay = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : `${currentDate.getDate()}`;
  const toDate = `${currentYear}-${currentMonth}-${currentDay}`;

  const lastYear = `${lastDate.getFullYear()}`;
  const lastMonth = lastDate.getMonth() + 1 < 10 ? `0${lastDate.getMonth() + 1}` : `${lastDate.getMonth() + 1}`;
  const lastDay = lastDate.getDate() < 10 ? `0${lastDate.getDate()}` : `${lastDate.getDate()}`;
  const fromDate = `${lastYear}-${lastMonth}-${lastDay}`;

  return [fromDate, toDate];
}
