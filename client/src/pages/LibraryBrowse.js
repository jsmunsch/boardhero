import React, { useState, useEffect } from "react";
import BrowseEmpty from "../components/library/BrowseEmpty";
import CollectionGrid from "../components/library/CollectionGrid";
import { getGamesFromApi } from "../api/GetDataFromApi";

export default function LibraryBrowse({ searchbarInput }) {
  const [apiGame, setApiGame] = useState(null);
  useEffect(() => {
    getGamesFromApi(searchbarInput).then(game => setApiGame(game));
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
