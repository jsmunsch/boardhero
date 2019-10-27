export function getUserData() {
  return fetch("/UserData").then(response =>
    response.json().then(text => {
      return text;
    })
  );
}
