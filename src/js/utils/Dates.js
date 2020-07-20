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

    for (let date of datesArray) {
      monthesArray.push(monthesNames[date.getMonth()]);
    }

    const result = Array.from(new Set(monthesArray));

    if (result.length > 1) {
      return result.join(' - ');
    } else {
      return String(result);
    }
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

  getMentionsByDays(articles) {
    const datesArray = this.getDateRange();
    const mentionsByDays = [];
    console.log(articles);

    let counter = null;
    for (let date of datesArray) {
      console.log(date);
      for (let article of articles) {
        console.log(new Date(article.publishedAt));
        if (date == article.publishedAt) {
          counter += 1;
          console.log(counter);
        }
      }
      mentionsByDays.push(counter);
      counter = null;
    }
    console.log(mentionsByDays);
  }
}
