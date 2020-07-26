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

    const fromDate = this.getFormatedDate(this.lastDate);
    const toDate = this.getFormatedDate(this.currentDate);

    return [fromDate, toDate];
  }

  getFormatedDate(date) {
    const currentYear = `${date.getFullYear()}`;
    const currentMonth = String((date.getMonth() + 1)).padStart(2, '0');
    const currentDay = String(date.getDate()).padStart(2, '0');
    
    return `${currentYear}-${currentMonth}-${currentDay}`;
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

    return days;
  }

  getMonthesForAnalytics() {
    const datesArray = this.getDateRange();
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

    datesArray.map( item => monthesArray.push(monthesNames[item.getMonth()]) );

    const result = Array.from(new Set(monthesArray));
    return result.length > 1 ? result.join(' - ') : String(result);
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
