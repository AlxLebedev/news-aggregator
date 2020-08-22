export default function validateLocalData(localData) {
  const currentDate = Date.now();
  const localDataDate = localData.date;
  const localDataAge = currentDate - localDataDate;
  const minutesInLifeCycle = 1;
  const millisecondsPerMinute = 60000;
  const lifeCycleOfLocalData = millisecondsPerMinute * minutesInLifeCycle;

  return !(localDataAge > lifeCycleOfLocalData);
}
