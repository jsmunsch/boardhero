import React from "react";
import styled from "styled-components";
import CollectionItemPositioned, {
  GamePositioned
} from "../components/GamePositioned";
import CardBadge from "../components/CardBadge";
import CardDetails from "../components/CardDetails";
import CardCategories from "../components/CardCategories";
import CardTitle from "../components/CardTitle";
import CardFlip from "../components/CardFlip";

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

export default function CardModal({ handleOutsideClick }) {
  return (
    <>
      <Background onClick={handleOutsideClick} />
      <FlexContainer>
        <StyledDiv>
          <CollectionItemPositioned />
          <CardFlip>Fest für Odin</CardFlip>
          <CardDetails>
            <CardTitle>Players: 2-4</CardTitle>
            <CardTitle>Time: test</CardTitle>
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
          </CardDetails>
        </StyledDiv>
      </FlexContainer>
    </>
  );
}
