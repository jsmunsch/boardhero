import React from "react";
import styled from "styled-components";
import CollectionItemPositioned from "../components/GamePositioned";
import CardBadge from "../components/CardBadge";
import CardDetails from "../components/CardDetails";
import CardCategories from "../components/CardCategories";
import CardTitle from "../components/CardTitle";
import CardFlip from "../components/CardFlip";
import AddButtonCollection from "./AddButtonCollection";
import Star from "../icons/Star";
import Dice from "../icons/Dice";
import AddButtonWishlist from "./AddButtonWishlist";

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

export default function CardModal({ handleOutsideClick, selectedGame }) {
  console.log(selectedGame);
  return (
    <>
      <Background onClick={handleOutsideClick} />
      <FlexContainer>
        <StyledDiv>
          <CollectionItemPositioned src={selectedGame.image_url} />
          <CardFlip>{selectedGame.name}</CardFlip>
          <CardDetails>
            <CardTitle>
              Players: {selectedGame.min_players}-{selectedGame.max_players}
            </CardTitle>
            <CardTitle>
              Time: {selectedGame.min_playtime}-{selectedGame.max_playtime} min
            </CardTitle>
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
            <AddButtonCollection handleAddButton={() => console.log("Hallo")}>
              <Star />
            </AddButtonCollection>
            <AddButtonWishlist>
              <Dice />
            </AddButtonWishlist>
          </CardDetails>
        </StyledDiv>
      </FlexContainer>
    </>
  );
}
