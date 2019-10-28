import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

const moveup = keyframes`
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
`;
const showText = keyframes`
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
`;
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
  color: #fff;
  font-size: 22px;
  padding: 0 1.2em 0 0;
  z-index: 10;

  ${props =>
    props.alert
      ? css`
          animation: ${moveup} 2.5s ease-in-out;
          display: "block";
        `
      : css`
          animation: none;
          display: none;
        `}
`;

const MessageText = styled.text`
  ${props =>
    props.alert
      ? css`
          animation: ${showText} 2.5s ease-in-out;
          display: "block";
        `
      : css`
          animation: none;
          display: none;
        `}
`;

export default function ConfirmationMessage() {
  const [alert, setAlert] = useState(true);

  function alertUser() {
    setAlert(true);
  }
  function resetAlert() {
    setAlert(false);
  }

  return (
    <MessageBox alert={alert} resetAlert={resetAlert} x>
      <MessageText alert={alert}>Game Succesfully added</MessageText>
    </MessageBox>
  );
}
