import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Amount = styled.h1`
  font-style: bold;
  margin: 0;
`;

const Description = styled.div``;

export default function AmountGames({ amount, description }) {
  return (
    <Container>
      <Amount>{amount}</Amount>
      <Description>{description}</Description>
    </Container>
  );
}
