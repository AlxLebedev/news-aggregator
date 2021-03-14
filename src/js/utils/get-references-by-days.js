/**
 * Проходится по отсортированным по дате объектам новостей, выделяет заголовок и описание новости, складывает в отдельный массив.
 * Проходится по полученному массиву, ищет упоминание новостного запроса пользователя - формирует массив с колличеством упоминаний
 * запроса пользователя по дням
 * @param {Array[]} sorteredArticles Массив, включающий в себя другие массивы с объектами новостей. 
 * @param {string} request Новостной запрос пользователя
 * @returns {number[]} Массив вида [2, 1, 3, 0, 4, 10, 3] - первая цифра соответствует количеству упоминаний в дату "сегодня минус 6 дней"
 */

export default function getReferencesByDays(sorteredArticles, request) {
  function extractArticles(articles) {
    const extractedArticles = [];

    for (const articlesArray of articles) {
      if (articlesArray.length === 0) {
        extractedArticles.push([]);
        continue;
      }

      const result = [];
      articlesArray.map((article) => result.push(article.title, article.description));

      extractedArticles.push(result);
    }

    return extractedArticles;
  }

  const regExp = new RegExp(request.toLowerCase(), 'g');
  
  /** @function */
  const extractedArticles = extractArticles(sorteredArticles);

  const referencesByDays = [];
  for (const item of extractedArticles) {
    const references = String(item).toLowerCase().match(regExp);

    if (!references) {
      referencesByDays.push(0);
      continue;
    }

    referencesByDays.push(references.length);
  }

  return referencesByDays;
}
