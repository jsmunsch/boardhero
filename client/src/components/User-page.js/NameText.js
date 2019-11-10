import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
`;

const Name = styled.text`
  font-style: bold;
  margin: 0;
  font-size: 1.4em;
`;

const Description = styled.div`
  font-weight: 100;
`;

export default function NameText({ name, description }) {
  return (
    <Container>
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Container>
  );
}
