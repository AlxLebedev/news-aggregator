/**
 * Перебирает полученные с сервера новости, выделяет заголовки и считает количество упоминаний запроса пользователя в них
 * @param {string} request Новостной запрос пользователя
 * @param {Object[]} articles Массив полученных с сервера объектов новостей по запросу пользователя
 * @returns {number} Количество упоминаний новостного запроса пользователя в заголовках статей  
 */

export default function getMentionsInTitles(request, articles) {
  const regExp = new RegExp(request.toLowerCase(), 'g');

  const articlesTitles = [];
  articles.map((article) => articlesTitles.push(article.title));

  const result = String(articlesTitles).toLowerCase().match(regExp);
  return result ? result.length : 0;
}
