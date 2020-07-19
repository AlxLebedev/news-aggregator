import Analytics from './Modules/Analytics';

const newsData = JSON.parse(sessionStorage.getItem('newsData'));
const userQuery = sessionStorage.getItem('userQuery');
const analytics = new Analytics(newsData, userQuery);

analytics.init();

console.log(newsData);
