export function getWishlistCollection() {
  return fetch("/gameWishlist").then(response => response.json());
}

export function postGameToWishlist(game) {
  return fetch("/gameWishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  });
}
