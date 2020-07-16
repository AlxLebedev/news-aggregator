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
}

// export default function getDates() {
//   const daysAgo = 7;
//   const msPerDay = 86400000;
//   const currentDate = new Date();
//   const lastDate = new Date(currentDate - (daysAgo * msPerDay));

//   const currentYear = `${currentDate.getFullYear()}`;
//   const currentMonth = currentDate.getMonth() + 1 < 10 ? `0${currentDate.getMonth() + 1}` : `${currentDate.getMonth() + 1}`;
//   const currentDay = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : `${currentDate.getDate()}`;
//   const toDate = `${currentYear}-${currentMonth}-${currentDay}`;

//   const lastYear = `${lastDate.getFullYear()}`;
//   const lastMonth = lastDate.getMonth() + 1 < 10 ? `0${lastDate.getMonth() + 1}` : `${lastDate.getMonth() + 1}`;
//   const lastDay = lastDate.getDate() < 10 ? `0${lastDate.getDate()}` : `${lastDate.getDate()}`;
//   const fromDate = `${lastYear}-${lastMonth}-${lastDay}`;

//   return [fromDate, toDate];
// }
