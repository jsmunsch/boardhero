import React, { useState } from "react";
import { getBrowseCollection } from "../api/BrowseCollection";
import BrowseEmpty from "../components/BrowseEmpty";
import CollectionGrid from "../components/CollectionGrid";
import CollectionItem from "../components/CollectionItem";
import CardModal from "../components/CardModal";

export default function LibraryBrowse({ currywurst }) {
  React.useEffect(() => {
    getBrowseCollection().then(gameArray => {
      setBrowseGame(gameArray);
    });
  }, []);

  const [browseGame, setBrowseGame] = useState([]);
  const [showModal, setShowModal] = useState([]);
  const searchBrowseGames = browseGame.filter(info =>
    info.name.toLowerCase().includes(currywurst.toLowerCase())
  );
  return (
    <>
      {!currywurst && (
        <BrowseEmpty>
          Please use the searchbar to browse through our available games.
        </BrowseEmpty>
      )}
      {currywurst && <CollectionGrid collection={searchBrowseGames} />}
    </>
  );
}

// async function addGameToCollection() {
//   postGameToCollection(selectGame);
//   setBoolean(!boolean);
// }
// async function addGameToWishlist() {
//   postGameToWishlist(selectGame);
//   setBoolean(!boolean);
// }
