export function getWishlistCollection() {
  return fetch("http://localhost:8080/api/wishlist").then(response =>
    response.json()
  );
}

export function postGameToWishlist(game) {
  console.log(game);
  return fetch("http://localhost:8080/api/wishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  });
}
