import React, { useState } from "react";
import styled from "styled-components";
import CollectionItem from "./CollectionItem";
import CardModal from "../popup-card/CardModal";

const BodyGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  background-color: ${props => props.theme.main};
  justify-content: center;
  @media (min-width: 800px) {
    width: 80%;
    grid-template-columns: repeat(5, 90px);
    grid-column-gap: 40px;
    grid-row-gap: 40px;
  }
`;

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.main};
  padding: 10px;
`;
export default function CollectionGrid({
  collection,
  enabled,
  removeGame,
  removeWishlist
}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState();

  return (
    <>
      {showModal && (
        <CardModal
          singleGame={selectedGame}
          handleOutsideClick={() => setShowModal(false)}
          enabled={enabled}
          removeGame={removeGame}
          removeWishlist={removeWishlist}
        />
      )}
      <WrapperDiv>
        <BodyGrid>
          {collection.map(game => (
            <CollectionItem
              key={game.id}
              onClick={() => {
                setSelectedGame(game);
                setShowModal(true);
              }}
              src={game.image_url}
            />
          ))}
        </BodyGrid>
      </WrapperDiv>
    </>
  );
}
