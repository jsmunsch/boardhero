import React, { useState } from "react";
import CollectionGrid from "../components/CollectionGrid";
import { getGameCollection } from "../api/GameCollection";

export default function LibraryCollection({ inputValue }) {
  const [collectionGame, setCollectionGame] = useState([]);

  React.useEffect(() => {
    getGameCollection().then(gameArray => {
      setCollectionGame(gameArray);
    });
  }, []);

  const searchCollectionGames = collectionGame.filter(info =>
    info.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return <CollectionGrid collection={searchCollectionGames} />;
}
