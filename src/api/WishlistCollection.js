export function getWishlistCollection() {
  return fetch("http://localhost:3000/gameWishlist").then(response =>
    response.json()
  );
}

export function postGameToWishlist(game) {
  return fetch("http://localhost:3000/gameWishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  });
}
