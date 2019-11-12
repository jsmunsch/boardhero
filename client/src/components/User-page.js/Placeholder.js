import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  background: ${props => props.theme.mainLight};
  flex-grow: 1;
  flex-direction: column;
`;

const TextContainer = styled.div`
  width: 80%;
  max-width: 420px;
  text-align: center;
`;

const FriendButton = styled.button`
  border-radius: 5px;
  width: 60%;
  max-width: 320px;
  height: 15%;
  margin: 20px;
  background: ${props => props.theme.brightEffect};
  color: white;
  border: none;
  font-size: 1.1em;
  box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.15);
  padding: 15px;
  line-height: 1px;
`;

export default function Placeholder({ text, buttonText, onClick }) {
  return (
    <Container>
      <TextContainer text={text}>{text}</TextContainer>
      <FriendButton buttonText={buttonText} onClick={onClick}>
        {buttonText}
      </FriendButton>
    </Container>
  );
}
