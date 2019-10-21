import React, { useState } from "react";
import CollectionGrid from "../components/CollectionGrid";
import { getWishlistCollection } from "../api/WishlistCollection";

export default function LibraryWishlist({ inputValue }) {
  React.useEffect(() => {
    getWishlistCollection().then(gameArray => {
      setWishlistGame(gameArray);
    });
  }, []);

  const [wishlistGame, setWishlistGame] = useState([]);
  const searchWishlistGames = wishlistGame.filter(info =>
    info.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return <CollectionGrid collection={searchWishlistGames} />;
}
