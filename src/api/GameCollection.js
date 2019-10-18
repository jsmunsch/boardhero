import { waitTwoSeconds } from "./BrowseCollection";

export function getGameCollection() {
  return fetch("http://localhost:3000/gameCollection").then(response =>
    response.json()
  );
}

export function postGameCollection(game) {
  return fetch("http://localhost:3000/gameCollection", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  });
}

export async function getAsyncCollectionGames() {
  await waitTwoSeconds();
  const games = await getGameCollection();
  return games;
}
