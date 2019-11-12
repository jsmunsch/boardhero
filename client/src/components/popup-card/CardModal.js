import React, { useState } from "react";
import styled from "styled-components";
import CollectionItemPositioned from "./GamePositioned";
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
import CardBack from "./CardBack";
import ModalContainer from "./ModalContainer";

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

  const regex = /((<([^>&"]+)>)|(\&quot\;))/gi;
  const description = singleGame.description.replace(regex, "");

  return (
    <>
      <Background onClick={handleOutsideClick} />
      <FlexContainer>
        {!showBack && (
          <ModalContainer>
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
                singleGame={singleGame}
                setStartAnimation={setStartAnimation}
              >
                To Collection
              </AddButtonCollection>
            )}
            {enabled && (
              <AddButtonWishlist
                singleGame={singleGame}
                setStartAnimation={setStartAnimation}
                newWishlistEntry={newWishlistEntry}
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
          </ModalContainer>
        )}
        {showBack && (
          <CardBack
            singleGame={singleGame}
            setShowBack={setShowBack}
            showBack={showBack}
          />
        )}
      </FlexContainer>
      {startAnimation && <ConfirmationMessage />}
    </>
  );
}
