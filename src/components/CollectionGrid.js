import React from "react";
import styled from "styled-components";
import CollectionItem from "./CollectionItem";

const BodyGrid = styled.div`
  width: 320px;
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  background-color: ${props => props.theme.main};
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
export default function CollectionGrid({ onItemClick, collection }) {
  return (
    <WrapperDiv>
      <BodyGrid>
        {collection.map(game => (
          <CollectionItem
            key={game.id}
            onClick={() => onItemClick(game)}
            src={game.image_url}
          />
        ))}
      </BodyGrid>
    </WrapperDiv>
  );
}
