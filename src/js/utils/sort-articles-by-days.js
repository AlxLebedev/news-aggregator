/**
 * Сортирует новости: проходится по новостям и складывает новости с одинаковой датой публикации в массив
 * @param {Object[]} articles Массив объектов новостей
 * @param {Date[]} dates Массив дат от "сегодня минус 6 дней назад" до "сегодня"
 * @returns {Array[]} Массив со вложенными массивами, содержащими объекты новостей за конкретную дату
 */

export default function sortArticlesByDays(articles, dates) {
  const sortedArticles = [];

  for (const date of dates) {
    const result = articles.filter(
      (article) => new Date(article.publishedAt).setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0),
    );
    sortedArticles.push(result);
  }

  return sortedArticles;
}
