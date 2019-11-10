import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin-left: 30px;
`;

const Amount = styled.text`
  font-style: bold;
  margin: 0;
  font-size: 1.2em;
`;

const Description = styled.div`
  font-weight: 100;
`;

export default function AmountGames({ name, description }) {
  return (
    <Container>
      <Amount>{name}</Amount>
      <Description>{description}</Description>
    </Container>
  );
}
