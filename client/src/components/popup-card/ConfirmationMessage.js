import React from "react";
import styled from "styled-components";
import { alert } from "../../animations/alert";
import { textFadeIn } from "../../animations/textFadeIn";

const MessageBox = styled.div`
  background: ${props => props.theme.darkFont};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: -5em;
  left: 50%;
  margin-left: -175px;
  width: 80%px;
  height: 65px;
  color: #fff;
  font-size: 22px;
  padding: 0 1.2em 0 0;
  z-index: 10;
  animation: ${alert} 2.5s ease-in-out;
  display: "block";
`;

const MessageText = styled.span`
  animation: ${textFadeIn} 2.5s ease-in-out;
  display: "block";
`;

export default function ConfirmationMessage() {
  return (
    <MessageBox>
      <MessageText>Game Succesfully added</MessageText>
    </MessageBox>
  );
}
