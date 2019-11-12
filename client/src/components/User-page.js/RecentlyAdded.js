import React from "react";
import styled from "styled-components";
import CollectionItem from "../library/CollectionItem";
import AmountGames from "./AmountGames";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7%;
  min-height: 108px;
`;

const Span = styled.span`
  margin-top: 20px;
`;

export default function RecentlyAdded({ src, name, description }) {
  return (
    <Container>
      <CollectionItem src={src} />
      <Span>
        <AmountGames name={name} description={description} />
      </Span>
      <span />
    </Container>
  );
}
