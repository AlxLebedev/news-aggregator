/**
 * Добавляет get-параметр с запросом пользователя в адрес внутренних ссылок
 * @param {NodeList} links Коллекция внутренних ссылок (ведущих на страницы внутри сайта)
 * @param {string} param Запрос пользователя
 */

export default function addParamsToLinks(links, param) {
  const linksArr = Array.from(links);

  linksArr.map((link) => {
    const initialLinkAddress = link.href.split('?')[0];
    link.href = `${initialLinkAddress}?request=${param}`;
  });
}
