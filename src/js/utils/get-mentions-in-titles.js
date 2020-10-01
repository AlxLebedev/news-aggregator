export default function getMentionsInTitles(request, articles) {
  const regExp = new RegExp(request.toLowerCase(), 'g');

  const articlesTitles = [];
  articles.map((article) => articlesTitles.push(article.title));

  const result = String(articlesTitles).toLowerCase().match(regExp);
  return result ? result.length : 0;
}
