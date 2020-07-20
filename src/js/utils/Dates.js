export default class Dates {
  constructor() {
    this.daysAgo = 6;
    this.msPerDay = 86400000;
    this.currentDate = null;
    this.lastDate = null;
  }

  getDatesForRequest() {
    this.currentDate = new Date();
    this.lastDate = new Date(this.currentDate - (this.daysAgo * this.msPerDay));

    const currentYear = `${this.currentDate.getFullYear()}`;
    const currentMonth = this.currentDate.getMonth() + 1 < 10 ? `0${this.currentDate.getMonth() + 1}` : `${this.currentDate.getMonth() + 1}`;
    const currentDay = this.currentDate.getDate() < 10 ? `0${this.currentDate.getDate()}` : `${this.currentDate.getDate()}`;
    const toDate = `${currentYear}-${currentMonth}-${currentDay}`;
  
    const lastYear = `${this.lastDate.getFullYear()}`;
    const lastMonth = this.lastDate.getMonth() + 1 < 10 ? `0${this.lastDate.getMonth() + 1}` : `${this.lastDate.getMonth() + 1}`;
    const lastDay = this.lastDate.getDate() < 10 ? `0${this.lastDate.getDate()}` : `${this.lastDate.getDate()}`;
    const fromDate = `${lastYear}-${lastMonth}-${lastDay}`;

    return [fromDate, toDate];
  }

  getDaysForAnalytics() {
    const datesArray = this.getDateRange();
    const daysNames = [
      'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб',
    ]
    const days = [];


    for (let date of datesArray) {
      const dayNumber = date.getDate();
      const dayIndex = date.getDay();
      days.push(`${dayNumber}, ${daysNames[dayIndex]}`);
    };

    console.log(days);
  }

   getDateRange() {
    this.currentDate = new Date();
    this.lastDate = new Date(this.currentDate - (this.daysAgo * this.msPerDay));

    const startDate = this.lastDate;
    const stopDate = this.currentDate;
    const datesArray = [];

    while (startDate <= stopDate) {
      datesArray.push(new Date (startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    return datesArray;
  }

  formatDate(date) {
    this.currentDate = new Date(date);

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

    const currentDay = this.currentDate.getDate() < 10 ? `0${this.currentDate.getDate()}` : `${this.currentDate.getDate()}`;
    const currentMonthIndex = this.currentDate.getMonth();
    const currentYear = `${this.currentDate.getFullYear()}`;

    return `${currentDay} ${monthes[currentMonthIndex]}, ${currentYear}`;
  }
}
