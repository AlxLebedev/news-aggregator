export default function getMentionsInTitles(request, articles) {
  const articlesTitles = [];
  const regExp = new RegExp(request.toLowerCase(), 'g');
  for (let artickle of articles) {
    articlesTitles.push(artickle.title);
  }
  const result = String(articlesTitles).toLowerCase().match(regExp);
  if (result) {
    return result.length;
  } else {
    return 0;
  }
}
