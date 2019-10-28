import React from "react";
import styled from "styled-components";

const MessageBox = styled.div`
  background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: -5em;
  left: 50%;
  margin-left: -175px;
  width: 350px;
  height: 65px;
  display: ${props => props.theme.accent};
  color: #fff;
  font-size: 22px;
  padding: 0 1.2em 0 0;
  z-index: 10;
  @keyframes moveup {
    0% {
      bottom: -5em;
      width: 65px;
      margin-left: -32.5px;
      border-radius: 50%;
    }
    7% {
      bottom: 3em;
      width: 65px;
      margin-left: -32.5px;
      border-radius: 50%;
    }
    12% {
      bottom: 3em;
      width: 65px;
      margin-left: -32.5px;
      border-radius: 50%;
    }
    25% {
      bottom: 3em;
      width: 380px;
      margin-left: -190px;
      border-radius: 0;
    }
    37% {
      bottom: 3em;
      width: 380px;
      margin-left: -190px;
    }
    42% {
      bottom: 3em;
      width: 380px;
      margin-left: -190px;
    }
    47% {
      bottom: 3.5em;
      width: 380px;
      margin-left: -190px;
      border-radius: 0;
    }
    50% {
      bottom: 3.5em;
      width: 380px;
      margin-left: -190px;
      border-radius: 0;
    }
    53% {
      bottom: 3.5em;
      width: 380px;
      margin-left: -190px;
      border-radius: 0;
    }
    58% {
      bottom: 3em;
      width: 380px;
      margin-left: -190px;
    }
    63% {
      bottom: 3em;
      width: 380px;
      margin-left: -190px;
    }
    75% {
      bottom: 3em;
      width: 380px;
      margin-left: -190px;
      border-radius: 0;
    }
    87% {
      bottom: 3em;
      width: 65px;
      margin-left: -32.5px;
      border-radius: 50%;
    }
    92% {
      bottom: 3em;
      width: 65px;
      margin-left: -32.5px;
      border-radius: 50%;
    }
    100% {
      bottom: -5em;
      width: 65px;
      margin-left: -32.5px;
      border-radius: 50%;
    }
  }

  animation: moveup 2.5s ease-in-out;
`;

const MessageText = styled.text`
  @keyframes showText {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  animation: showText 2.5s ease-in-out;
`;

export default function ConfirmationMessage() {
  return (
    <MessageBox>
      <MessageText>Game Succesfully added</MessageText>
    </MessageBox>
  );
}
