export function getBrowseCollection() {
  return fetch("/gameBrowse").then(response =>
    response.json().then(text => {
      return text;
    })
  );
}
