import React, { useState } from "react";
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
import { postGameToCollection } from "../api/GameCollection";
import { postGameToWishlist } from "../api/WishlistCollection";
import DetailButton from "./DetailButton";

export const Background = styled.img`
  height: 100%;
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
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
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  margin-top: -240px;
  background: white;
  position: fixed;
  z-index: 2;
  backdrop-filter: blur(2px);
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 20px;
  max-height: 75%;
  overflow-x: scroll;
  font-size: 1.2em;
`;

export default function CardModal({ handleOutsideClick, singleGame, enabled }) {
  const [showBack, setShowBack] = useState(false);
  async function addGameToCollection() {
    postGameToCollection(singleGame);
  }
  async function addGameToWishlist() {
    postGameToWishlist(singleGame);
  }

  return (
    <>
      <Background onClick={handleOutsideClick} />
      <FlexContainer>
        {!showBack && (
          <StyledDiv>
            <CollectionItemPositioned src={singleGame.image_url} />
            <CardFlip>{singleGame.name}</CardFlip>
            <CardDetails>
              <CardTitle>
                Players: {singleGame.min_players}-{singleGame.max_players}
              </CardTitle>
              <CardTitle>
                Time: {singleGame.min_playtime}-{singleGame.max_playtime} min
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
              <DetailButton handleClick={() => setShowBack(true)} />
              {enabled && (
                <AddButtonCollection
                  handleAddClick={() => addGameToCollection(singleGame)}
                >
                  <Star />
                </AddButtonCollection>
              )}
              {enabled && (
                <AddButtonWishlist
                  handleAddClick={() => addGameToWishlist(singleGame)}
                >
                  <Dice />
                </AddButtonWishlist>
              )}
            </CardDetails>
          </StyledDiv>
        )}
        {showBack && (
          <StyledDiv>
            <CollectionItemPositioned src={singleGame.image_url} />
            <DetailButton handleClick={() => setShowBack(false)} />
            <CardFlip>Description</CardFlip>
            <DescriptionContainer>
              {singleGame.description}
            </DescriptionContainer>
          </StyledDiv>
        )}
      </FlexContainer>
    </>
  );
}
