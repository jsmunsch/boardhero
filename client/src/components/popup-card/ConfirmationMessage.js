import React, { useState } from "react";
import styled, { css } from "styled-components";
import { alert } from "../../animations/alert";
import { textFadeIn } from "../../animations/textFadeIn";

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
          animation: ${alert} 2.5s ease-in-out;
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
          animation: ${textFadeIn} 2.5s ease-in-out;
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
