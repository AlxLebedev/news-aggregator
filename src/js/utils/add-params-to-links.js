export default function addParamsToLinks(links, param) {
  const linksArr = Array.from(links);

  linksArr.map((link) => {
    const initialLinkAddress = link.href.split('?')[0];
    link.href = `${initialLinkAddress}?request=${param}`;
  });
}
