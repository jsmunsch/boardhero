import React from "react";
import styled from "styled-components";
import CollectionItem from "../library/CollectionItem";
import AmountGames from "./AmountGames";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  margin-left: 50px;
  margin-top: 20px;
`;

export default function RecentlyAdded() {
  return (
    <Container>
      <CollectionItem />
      <Span>
        <AmountGames amount="1231" description="Games" />
      </Span>
    </Container>
  );
}
