import React, { useState } from "react";
import styled from "styled-components";
import CollectionItemPositioned from "./GamePositioned";
import CardBadge from "./CardBadge";
import CardDetails from "./CardDetails";
import CardCategories from "./CardCategories";
import CardSection from "./CardSection";
import CardGameName from "./GameName";
import AddButtonCollection from "./AddButtonCollection";
import Star from "../../icons/Star";
import Dice from "../../icons/Dice";
import AddButtonWishlist from "./AddButtonWishlist";
import { newGame } from "../../api/fetchGames";
import { newWishlistEntry } from "../../api/fetchWishlist";
import DetailButton from "./DetailButton";
import ConfirmationMessage from "./ConfirmationMessage";
import Woodsign from "../../icons/WoodSign";
import Grid from "./Grid";
import GameName from "./GameName";
import Players from "./Players";

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
  background: ${props => props.theme.main};
  position: fixed;
  z-index: 2;
  border: 4px solid white;
  border-radius: 15px;
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
  const [startAnimation, setStartAnimation] = useState(false);
  console.log(startAnimation);
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
            <Grid>
              <span></span>
              <GameName>{singleGame.name}</GameName>
              <Players>
                Players: {singleGame.min_players}-{singleGame.max_players}
              </Players>
            </Grid>
            {enabled && (
              <AddButtonCollection
                onClick={() => {
                  addGameToCollection(singleGame);
                  setStartAnimation(true);
                  setTimeout(() => {
                    setStartAnimation(false);
                  }, 5000);
                }}
              >
                + Collection
              </AddButtonCollection>
            )}
            {enabled && (
              <AddButtonWishlist
                onClick={() => {
                  addGameToWishlist(singleGame);
                  setStartAnimation(true);
                  setTimeout(() => {
                    setStartAnimation(false);
                  }, 5000);
                }}
              >
                + Wishlist
              </AddButtonWishlist>
            )}
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
      {startAnimation && <ConfirmationMessage />}
    </>
  );
}
