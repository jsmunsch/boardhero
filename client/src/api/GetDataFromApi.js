export function getGamesFromApi(name) {
  return fetch(`/api/search?name=${name}`).then(response => response.json());
}
