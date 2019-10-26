export function getUserData() {
  return fetch("http://localhost:3000/UserData").then(response =>
    response.json().then(text => {
      return text;
    })
  );
}
