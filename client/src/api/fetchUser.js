export function fetchUser() {
  return fetch("/api/users").then(response => response.json());
}

export function createUser(user) {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(user)
  });
}

export function validateCredentials(user) {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(user)
  });
}
