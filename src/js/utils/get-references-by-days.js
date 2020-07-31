export default function referencesByDays(sorteredArticles, request) {
  const regExp = new RegExp(request.toLowerCase(), 'g');
  const extractedArticles = [];
  const referencesByDays = [];

  for (let articlesArray of sorteredArticles) {
    if (articlesArray.length === 0) {
      extractedArticles.push([]);
      continue;
    }

    let result = [];
    for (let article of articlesArray) {
      const title = article.title;
      const description = article.description;
      result.push(title, description);
    }
    extractedArticles.push(result);
  }

  for (let item of extractedArticles) {
    let references = String(item).toLowerCase().match(regExp);
    
    if (!references) {
      referencesByDays.push(0);
      continue;
    }

    referencesByDays.push(references.length);
  }

  return referencesByDays;
}
