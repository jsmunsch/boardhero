import React, { useState, useEffect } from "react";
import BrowseEmpty from "../components/BrowseEmpty";
import CollectionGrid from "../components/CollectionGrid";
import axios from "axios";

export default function LibraryBrowse({ searchbarInput }) {
  const [apiGame, setApiGame] = useState(null);
  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = `https://www.boardgameatlas.com/api/search?name=${searchbarInput}&limit=10&fields=name,description,image_url,mechanics,categories,min_players,max_players,min_playtime,max_playtime&client_id=5cIY9zBPpt`;
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
  }, [searchbarInput]);
  return (
    <>
      {!searchbarInput && (
        <BrowseEmpty>
          Please use the searchbar to browse through our available games.
        </BrowseEmpty>
      )}
      {searchbarInput && apiGame && (
        <CollectionGrid
          collection={apiGame.games}
          limit={"10"}
          enabled={true}
        />
      )}
    </>
  );
}
