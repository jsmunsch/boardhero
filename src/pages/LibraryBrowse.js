import React, { useState } from "react";
import { getBrowseCollection } from "../api/BrowseCollection";
import BrowseEmpty from "../components/BrowseEmpty";
import CollectionGrid from "../components/CollectionGrid";

export default function LibraryBrowse({ inputValue }) {
  React.useEffect(() => {
    getBrowseCollection().then(gameArray => {
      setBrowseGame(gameArray);
    });
  }, []);

  const [browseGame, setBrowseGame] = useState([]);
  const searchBrowseGames = browseGame.filter(info =>
    info.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <>
      {!inputValue && (
        <BrowseEmpty>
          Please use the searchbar to browse through our available games.
        </BrowseEmpty>
      )}
      {inputValue && (
        <CollectionGrid collection={searchBrowseGames} enabled={true} />
      )}
    </>
  );
}
