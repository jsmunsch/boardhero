import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import CollectionItemPositioned from "../components/GamePositioned";
=======
import CollectionItemPositioned, {
  GamePositioned
} from "../components/GamePositioned";
>>>>>>> master
import CardBadge from "../components/CardBadge";
import CardDetails from "../components/CardDetails";
import CardCategories from "../components/CardCategories";
import CardTitle from "../components/CardTitle";
import CardFlip from "../components/CardFlip";
<<<<<<< HEAD
import AddButtonCollection from "./AddButtonCollection";
import Star from "../icons/Star";
import Dice from "../icons/Dice";
import AddButtonWishlist from "./AddButtonWishlist";
=======
>>>>>>> master

const Background = styled.img`
  height: 100%;
  width: 100%;
  background: transparent;
  position: fixed;
  z-index: 1;
  backdrop-filter: blur(1.2px);
  overflow-y: hidden;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StyledDiv = styled.div`
  width: 320px;
  height: 480px;
  top: 110px;
  right: 25px;
  background: white;
  position: fixed;
  z-index: 2;
  backdrop-filter: blur(2px);
`;

<<<<<<< HEAD
export default function CardModal({
  handleOutsideClick,
  selectedGame,
  onCollectionButton,
  onWishlistButton
}) {
  console.log(selectedGame);
=======
export default function CardModal({ handleOutsideClick }) {
>>>>>>> master
  return (
    <>
      <Background onClick={handleOutsideClick} />
      <FlexContainer>
        <StyledDiv>
<<<<<<< HEAD
          <CollectionItemPositioned src={selectedGame.image_url} />
          <CardFlip>{selectedGame.name}</CardFlip>
          <CardDetails>
            <CardTitle>
              Players: {selectedGame.min_players}-{selectedGame.max_players}
            </CardTitle>
            <CardTitle>
              Time: {selectedGame.min_playtime}-{selectedGame.max_playtime} min
            </CardTitle>
=======
          <CollectionItemPositioned />
          <CardFlip>Fest für Odin</CardFlip>
          <CardDetails>
            <CardTitle>Players: 2-4</CardTitle>
            <CardTitle>Time: test</CardTitle>
>>>>>>> master
            <CardTitle>Categories</CardTitle>
            <CardCategories>
              <CardBadge>Economics</CardBadge>
              <CardBadge>Sci-Fi</CardBadge>
              <CardBadge>Territory-Building</CardBadge>
            </CardCategories>
            <CardTitle>Mechanics</CardTitle>
            <CardCategories>
              <CardBadge>Area Control</CardBadge>
              <CardBadge>Route/Network Building</CardBadge>
            </CardCategories>
<<<<<<< HEAD
            <AddButtonCollection handleAddButton={onCollectionButton}>
              <Star />
            </AddButtonCollection>
            <AddButtonWishlist handleAddButton={onWishlistButton}>
              <Dice />
            </AddButtonWishlist>
=======
>>>>>>> master
          </CardDetails>
        </StyledDiv>
      </FlexContainer>
    </>
  );
}
