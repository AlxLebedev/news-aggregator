/**
 * Function-helper. Adds get-parameter to page address with user request
 * @param {NodeList} links All internal links which provedes inside the site
 * @param {String} param User request, entered in finder field
 */

export default function addParamsToLinks(links, param) {
  const linksArr = Array.from(links);

  linksArr.map((link) => {
    const initialLinkAddress = link.href.split('?')[0];
    link.href = `${initialLinkAddress}?request=${param}`;
  });
}
