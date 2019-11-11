import React, { useState } from "react";
import styled from "styled-components";
import CollectionGrid from "../components/library/CollectionGrid";
import { getWishlistCollection } from "../api/fetchWishlist";
import { useHistory } from "react-router-dom";
import Placeholder from "../components/User-page.js/Placeholder";

const FlexContainer = styled.div`
  display: flex;
  height: 300px;
  color: white;
`;

export default function LibraryWishlist({ searchbarInput }) {
  let history = useHistory();
  React.useEffect(() => {
    getWishlistCollection().then(gameArray => {
      setWishlistGame(gameArray);
    });
  }, []);

  const [wishlistGame, setWishlistGame] = useState(null);
  const searchWishlistGames = (wishlistGame || []).filter(info =>
    info.name.toLowerCase().includes(searchbarInput.toLowerCase())
  );
  return (
    <>
      {wishlistGame && wishlistGame.length === 0 && (
        <FlexContainer>
          <Placeholder
            text="Games added to your Wishlist will be shown here. Start by adding a few!"
            buttonText="Add Games"
            onClick={() => history.push("/library/browse")}
          />
        </FlexContainer>
      )}
      <CollectionGrid collection={searchWishlistGames} removeWishlist={true} />
    </>
  );
}
