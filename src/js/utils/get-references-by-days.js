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
