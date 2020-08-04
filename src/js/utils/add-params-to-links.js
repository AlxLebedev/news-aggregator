export default function addParamsToLinks(links, param) {
  const linksArray = Array.from(links);

  linksArray.map( link => link.href = link.href.split('?')[0] );

  linksArray.map( link => link.href = `${link.href}?request=${param}` );
}
