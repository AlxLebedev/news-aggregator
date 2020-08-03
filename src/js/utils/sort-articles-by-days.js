export default function sortArticlesByDays(articles, dates) {
  const sortedArticles = [];

  for (let date of dates) {
    const result = articles.filter(article => new Date(article.publishedAt).setHours(0,0,0,0) === date.setHours(0,0,0,0));
    sortedArticles.push(result);
  }

  return sortedArticles;
}
