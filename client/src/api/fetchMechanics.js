export function getMechanics() {
  return fetch(`/api/mechanics`).then(response => response.json());
}
