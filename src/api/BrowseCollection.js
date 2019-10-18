export function getBrowseCollection() {
  return fetch("http://localhost:3000/gameBrowse").then(response =>
    response.json().then(text => {
      return text;
    })
  );
}

export function waitTwoSeconds() {
  return new Promise(resolve => {
    setTimeout(resolve, 10);
  });
}

export async function getAsyncBrowseGames() {
  await waitTwoSeconds();
  const games = await getBrowseCollection();
  return games;
}
