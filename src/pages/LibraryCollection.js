import React, { useState } from "react";
import CollectionGrid from "../components/CollectionGrid";
import { getGameCollection } from "../api/GameCollection";

export default function LibraryCollection({ inputValue }) {
  React.useEffect(() => {
    getGameCollection().then(gameArray => {
      setCollectionGame(gameArray);
    });
  }, []);

  const [collectionGame, setCollectionGame] = useState([]);
  const searchCollectionGames = collectionGame.filter(info =>
    info.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return <CollectionGrid collection={searchCollectionGames} />;
}
