export function getGameCollection() {
  return fetch("http://localhost:3000/gameCollection").then(response =>
    response.json()
  );
}

export function postGameToCollection(game) {
  return fetch("http://localhost:3000/gameCollection", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  });
}
