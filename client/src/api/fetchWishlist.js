export function getWishlistCollection() {
  return fetch("/api/wishlist").then(response => response.json());
}

export function newWishlistEntry(game) {
  return fetch("/api/wishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  });
}

export function removeGameWishlist(game) {
  return fetch("/api/wishlistremove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  });
}
