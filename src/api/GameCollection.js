export function getGameCollection() {
  return fetch("http://localhost:8080/api/games").then(response =>
    response.json()
  );
}

export function postGameToCollection(game) {
  console.log(game);
  return fetch("http://localhost:8080/api/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(game)
  });
}
