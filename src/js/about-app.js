import './Modules/Swiper';
import GetCommits from './Modules/GetCommits';

const getCommits = new GetCommits();
getCommits.get();

// async function showCommits() {
//   const commits = await getCommits.fetchCommits();
//   return commits;
// }

// console.log(showCommits());
