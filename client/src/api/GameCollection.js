export async function getGameCollection() {
  return fetch("http://localhost:8080/api/collection").then(response =>
    response.json()
  );
}

export function postGameToCollection(game) {
  return fetch("http://localhost:8080/api/collection", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(game)
  });
}
