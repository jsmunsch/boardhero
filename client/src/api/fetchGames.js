export async function getGamesCollection() {
  return fetch("/api/games").then(response => response.json());
}

export function newGame(game) {
  return fetch("/api/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(game)
  });
}
