import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetDataFromApi() {
  const [apiGame, setApiGame] = useState();

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl =
      "https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=SB1VGnDv7M";
    axios({
      url: proxyUrl + targetUrl,
      method: "GET",
      headers: {
        Accept: "application/json",
        "client-id": "5cIY9zBPpt"
      }
    })
      .then(response => {
        setApiGame(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <>
      {apiGame && (
        <div>
          {apiGame.games.map(game => (
            <div>
              <h1>{game.name}</h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
