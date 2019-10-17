export function getBrowseCollection() {
  return fetch("http://localhost:3000/gameBrowse").then(response =>
    response.json().then(text => {
      return text;
    })
  );
}

export async function getGames({ textInput }) {
  const searchBrowseCollection = await getBrowseCollection();
  return await searchBrowseCollection.filter(info =>
    info.name.toLowerCase().includes(textInput.toLowerCase())
  );
}
