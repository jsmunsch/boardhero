import React, { useState } from "react";
import styled from "styled-components";
import CollectionItemPositioned from "../GamePositioned";
import CardBadge from "./CardBadge";
import CardDetails from "./CardDetails";
import CardCategories from "./CardCategories";
import CardSection from "./CardSection";
import CardGameName from "./CardGameName";
import AddButtonCollection from "./AddButtonCollection";
import Star from "../../icons/Star";
import Dice from "../../icons/Dice";
import AddButtonWishlist from "./AddButtonWishlist";
import { newGame } from "../../api/fetchGames";
import { newWishlistEntry } from "../../api/fetchWishlist";
import DetailButton from "./DetailButton";
import ConfirmationMessage from "./ConfirmationMessage";

export const Background = styled.img`
  height: 100%;
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  z-index: 1;
  backdrop-filter: blur(2.8px);
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
  /* @keyframes turner {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(180deg);
    }
  }
  animation: turner 1s ease-in-out; */
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
    newGame(singleGame);
  }
  async function addGameToWishlist() {
    newWishlistEntry(singleGame);
  }

  return (
    <>
      <Background onClick={handleOutsideClick} />
      <FlexContainer>
        {!showBack && (
          <StyledDiv>
            <CollectionItemPositioned src={singleGame.image_url} />
            <CardGameName>{singleGame.name}</CardGameName>
            <CardDetails>
              <CardSection>
                Players: {singleGame.min_players}-{singleGame.max_players}
              </CardSection>
              <CardSection>
                Time: {singleGame.min_playtime}-{singleGame.max_playtime} min
              </CardSection>
              <CardSection>Categories</CardSection>
              <CardCategories>
                <CardBadge>Economics</CardBadge>
                <CardBadge>Sci-Fi</CardBadge>
                <CardBadge>Territory-Building</CardBadge>
              </CardCategories>
              <CardSection>Mechanics</CardSection>
              <CardCategories>
                <CardBadge>Area Control</CardBadge>
                <CardBadge>Route/Network Building</CardBadge>
              </CardCategories>
              <DetailButton onClick={() => setShowBack(true)} />
              {enabled && (
                <AddButtonCollection
                  onClick={() => {
                    addGameToCollection(singleGame);
                    // setetShowConfirmation()true
                  }}
                >
                  <Star />
                </AddButtonCollection>
              )}
              {enabled && (
                <AddButtonWishlist
                  onClick={() => addGameToWishlist(singleGame)}
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
            <CardGameName>Description</CardGameName>
            <DescriptionContainer>
              {singleGame.description}
            </DescriptionContainer>
          </StyledDiv>
        )}
      </FlexContainer>
      <ConfirmationMessage
      // show={showConformation}
      // onClose={() => setShowConfirmation(false)}
      />
    </>
  );
}
