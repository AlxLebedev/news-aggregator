import DrawUI from './components/DrawUI';
import AddListeners from './Modules/AddListeners';

const drawUI = new DrawUI();

const addListeners = new AddListeners(drawUI);
addListeners.init();

if (sessionStorage.newsData) {
  const newsData = JSON.parse(sessionStorage.newsData);
  console.log(newsData);
  drawUI.renderResultsContent(newsData);
}
