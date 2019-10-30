import React from "react";
import styled, { keyframes } from "styled-components";
import NavigationMenuButton from "./NavigationMenuButton";
import Dice from "../icons/Dice";
import Person from "../icons/Person";
import Upload from "../icons/Upload";
import Logout from "../icons/Logout";
import { Link } from "react-router-dom";

const morph = keyframes`
  0% { width: 0px;}
  100% { width: 100%}
`;

const PositionContainer = styled.nav`
  position: absolute;
  left: 0px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70vw;
  height: 100vh;
  background-color: ${props => props.theme.accent};
  animation: ${morph} 0.3s ease-in-out;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NameContainer = styled.div`
  color: ${props => props.theme.brightEffect};
  margin-left: 5px;
  font-size: 1.2em;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function BurgerMenuList() {
  return (
    <>
      <PositionContainer>
        <NameContainer>Hallo Jonas</NameContainer>
        <NavigationMenuButton
          onClick={() => console.log("Collection")}
          selected
        >
          <Dice selected />
          Collection
        </NavigationMenuButton>
        <NavigationMenuButton onClick={() => console.log("User")}>
          <Person />
          User
        </NavigationMenuButton>
        <NavigationMenuButton onClick={() => console.log("Share")}>
          <Upload />
          Share
        </NavigationMenuButton>
        <NavigationMenuButton onClick={() => console.log("Logout")}>
          <Logout />
          Logout
        </NavigationMenuButton>
      </PositionContainer>
    </>
  );
}
