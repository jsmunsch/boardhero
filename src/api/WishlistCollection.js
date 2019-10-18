import { waitTwoSeconds } from "./BrowseCollection";

export function getWishlistCollection() {
  return fetch("http://localhost:3000/gameWishlist").then(response =>
    response.json()
  );
}

export function postGameWishlist(game) {
  return fetch("http://localhost:3000/gameWishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  });
}

export async function getAsyncWishlistGames() {
  await waitTwoSeconds();
  const games = await getWishlistCollection();
  return games;
}
