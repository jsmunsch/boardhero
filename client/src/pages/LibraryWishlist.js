import React, { useState } from "react";
import CollectionGrid from "../components/CollectionGrid";
import { getWishlistCollection } from "../api/fetchWishlist";

export default function LibraryWishlist({ searchbarInput }) {
  React.useEffect(() => {
    getWishlistCollection().then(gameArray => {
      setWishlistGame(gameArray);
    });
  }, []);

  const [wishlistGame, setWishlistGame] = useState([]);
  const searchWishlistGames = wishlistGame.filter(info =>
    info.name.toLowerCase().includes(searchbarInput.toLowerCase())
  );
  return <CollectionGrid collection={searchWishlistGames} />;
}
