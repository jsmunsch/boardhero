import React, { useState } from "react";
import CollectionGrid from "../components/CollectionGrid";
import { getGamesCollection } from "../api/fetchGames";

export default function LibraryCollection({ searchbarInput }) {
  const [games, setGames] = useState([]);

  React.useEffect(() => {
    getGamesCollection().then(gameArray => {
      setGames(gameArray);
    });
  }, []);

  const searchGames = games.filter(info =>
    info.name.toLowerCase().includes(searchbarInput.toLowerCase())
  );

  return <CollectionGrid collection={searchGames} />;
}
