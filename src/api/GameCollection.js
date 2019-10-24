export function getGameCollection() {
  return fetch("/gameCollection").then(response => response.json());
}

export function postGameToCollection(game) {
  return fetch("/gameCollection", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  });
}
