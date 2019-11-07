import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Amount = styled.text`
  font-style: bold;
  margin: 0;
  font-size: 1.6em;
`;

const Description = styled.div`
  font-weight: 100;
`;

export default function AmountGames({ amount, description }) {
  return (
    <Container>
      <Amount>{amount}</Amount>
      <Description>{description}</Description>
    </Container>
  );
}
