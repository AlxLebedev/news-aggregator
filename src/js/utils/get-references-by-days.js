export default function referencesByDays(sorteredArticles, request) {
  const regExp = new RegExp(request.toLowerCase(), 'g');
  const extractedArticles = extractArticles(sorteredArticles);
  
  const referencesByDays = [];
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

function extractArticles(articles) {
  const extractedArticles = [];

  for (let articlesArray of articles) {
    if (articlesArray.length === 0) {
      extractedArticles.push([]);
      continue;
    }

    let result = [];
    articlesArray.map( article => result.push(article.title, article.description) );

    extractedArticles.push(result);
  }

  return extractedArticles;
}
