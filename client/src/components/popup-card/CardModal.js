import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CollectionItemPositioned from "./GamePositioned";
import CardGameName from "./GameName";
import AddButtonCollection from "./AddButtonCollection";
import AddButtonWishlist from "./AddButtonWishlist";
import { newGame, removeGameEntry } from "../../api/fetchGames";
import { newWishlistEntry, removeGameWishlist } from "../../api/fetchWishlist";
import DetailButton from "./DetailButton";
import ConfirmationMessage from "./ConfirmationMessage";
import Grid from "./Grid";
import GameName from "./GameName";
import Players from "./Players";
import TrimText from "./TrimText";
import Rating from "react-rating";
import StarRatingFull from "../../icons/StarRatingFull";
import StarRatingEmpty from "../../icons/StarRatingEmpty";
import RatingContainer from "./RatingContainer";
import RemoveButton from "./RemoveButton";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;
  position: fixed;
  outline: none;
  border: none;
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
`;

const DescriptionContainer = styled.div`
  display: flex;
  fill: white;
  color: white;
  justify-content: center;
  margin: 0px 20px 0 10px;
  max-height: 40vh;
  @media (min-height: 750px) {
    max-height: 35vh;
  }
  overflow-x: scroll;
  font-size: 1.2em;
`;

const Info = styled.span`
  margin: 6px 0px;
`;

const ColoredSpan = styled.span`
  color: ${props => props.theme.brightEffect};
  margin-right: 10px;
`;

export default function CardModal({
  handleOutsideClick,
  singleGame,
  enabled,
  removeGame,
  removeWishlist
}) {
  const [showBack, setShowBack] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const regex = /(<([^>&"]+)>)/gi;
  const regex2 = /(&quot\;)/gi;
  const description = singleGame.description.replace(regex, "");

  return (
    <>
      <Background onClick={handleOutsideClick} />
      <FlexContainer>
        {!showBack && (
          <StyledDiv>
            <CollectionItemPositioned src={singleGame.image_url} />
            <RatingContainer>
              <Rating
                initialRating={singleGame.average_user_rating}
                readonly
                fullSymbol={<StarRatingFull />}
                emptySymbol={<StarRatingEmpty />}
              />
              <span>({singleGame.num_user_ratings})</span>
            </RatingContainer>
            <Grid>
              <span></span>
              <GameName>{singleGame.name}</GameName>
              <Players>
                <ColoredSpan>Players: </ColoredSpan> {singleGame.min_players}-
                {singleGame.max_players}
                <Info />
                <ColoredSpan>Playtime: </ColoredSpan>
                {singleGame.min_playtime}min - {singleGame.max_playtime}min
                <Info />
                <ColoredSpan>Description: </ColoredSpan>
                <span>
                  {TrimText(`${description}`, 43)}
                  <DetailButton onClick={() => setShowBack(!showBack)} />
                </span>
              </Players>
            </Grid>
            {enabled && (
              <AddButtonCollection
                onClick={() => {
                  newGame(singleGame);
                  setStartAnimation(true);
                  setTimeout(() => {
                    setStartAnimation(false);
                  }, 5000);
                }}
              >
                To Collection
              </AddButtonCollection>
            )}
            {enabled && (
              <AddButtonWishlist
                onClick={() => {
                  newWishlistEntry(singleGame);
                  setStartAnimation(true);
                  setTimeout(() => {
                    setStartAnimation(false);
                  }, 5000);
                }}
              >
                To Wishlist
              </AddButtonWishlist>
            )}
            {removeWishlist && (
              <RemoveButton
                onClick={() => {
                  removeGameWishlist(singleGame);
                  window.location.reload(true);
                }}
              >
                Remove
              </RemoveButton>
            )}
            {removeGame && (
              <RemoveButton
                onClick={() => {
                  removeGameEntry(singleGame);
                  window.location.reload(true);
                }}
              >
                Remove
              </RemoveButton>
            )}
          </StyledDiv>
        )}
        {showBack && (
          <StyledDiv>
            <CollectionItemPositioned src={singleGame.image_url} />
            <RatingContainer>
              <Rating
                initialRating={singleGame.average_user_rating}
                readonly
                fullSymbol={<StarRatingFull />}
                emptySymbol={<StarRatingEmpty />}
              />
              <span>({singleGame.num_user_ratings})</span>
            </RatingContainer>
            <Grid>
              <span></span>
              <CardGameName>Description</CardGameName>

              <DescriptionContainer>{description}</DescriptionContainer>
              <DetailButton onClick={() => setShowBack(!showBack)} />
            </Grid>
          </StyledDiv>
        )}
      </FlexContainer>
      {startAnimation && <ConfirmationMessage />}
    </>
  );
}
