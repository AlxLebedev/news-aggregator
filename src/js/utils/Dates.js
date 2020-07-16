export default class Dates {
  constructor() {
    this.daysAgo = 7;
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

  formatCommitDate(date) {
    this.currentDate = new Date(date);

    const monthes = [
      'января,',
      'февраля,',
      'марта,',
      'апреля,',
      'мая,',
      'июня,',
      'июля,',
      'августа,',
      'сентября,',
      'октября,',
      'ноября,',
      'декабря,'
    ];

    const currentDay = this.currentDate.getDate() < 10 ? `0${this.currentDate.getDate()}` : `${this.currentDate.getDate()}`;
    const currentMonthIndex = this.currentDate.getMonth();
    const currentYear = `${this.currentDate.getFullYear()}`;

    return `${currentDay} ${monthes[currentMonthIndex]} ${currentYear}`;
  }
}
