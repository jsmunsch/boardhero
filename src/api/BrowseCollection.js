export function getBrowseCollection() {
  return fetch("http://localhost:3000/gameBrowse").then(response =>
    response.json().then(text => {
      return text;
    })
  );
}
