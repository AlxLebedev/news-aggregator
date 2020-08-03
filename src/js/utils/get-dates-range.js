export default function getDatesRange(dates) {
  const [fromDate, toDate] = dates;
  
  const startDate = new Date(fromDate);
  const stopDate = new Date(toDate);

  const result = [];
  while (startDate <= stopDate) {
    result.push(new Date (startDate));
    startDate.setDate(startDate.getDate() + 1);
  }

  return result;
}
