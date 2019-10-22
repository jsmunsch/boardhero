import React, { useState, useEffect } from "react";
import BrowseEmpty from "../components/BrowseEmpty";
import CollectionGrid from "../components/CollectionGrid";
import axios from "axios";

export default function LibraryBrowse({ inputValue }) {
  const [apiGame, setApiGame] = useState();
  console.log(apiGame);

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = `https://www.boardgameatlas.com/api/search?name=${inputValue}&client_id=5cIY9zBPpt`;
    axios({
      url: proxyUrl + targetUrl,
      method: "GET",
      headers: {
        Accept: "application/json",
        "client-id": "5cIY9zBPpt"
      }
    })
      .then(response => {
        console.log(response.data);
        setApiGame(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [inputValue]);
  return (
    <>
      {!inputValue && (
        <BrowseEmpty>
          Please use the searchbar to browse through our available games.
        </BrowseEmpty>
      )}
      {inputValue && (
        <CollectionGrid collection={apiGame.games} enabled={true} />
      )}
    </>
  );
}
