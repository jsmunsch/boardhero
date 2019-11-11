import React from "react";
import styled, { keyframes } from "styled-components";
import NavigationMenuButton from "./library/NavigationMenuButton";
import Dice from "../icons/Dice";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import Logout from "../icons/Logout";

import { useUser } from "../hooks";
import { unsetUser } from "../api/fetchUser";
import Person from "../icons/Person";
import Clear from "../icons/Clear";
import { morph, morphAway } from "../animations/morph";

const PositionContainer = styled.nav`
  position: fixed;
  left: 0px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70vw;
  height: 100vh;
  background-color: ${props => props.theme.accent};
  animation: ${morph} 0.4s ease-in-out;
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

const FlexDiv = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  margin-left: -10px;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  color: inherit;
  width: 40px;
  height: 40px;
  background: inherit;
`;

export default function BurgerMenuList({ handleClose }) {
  let history = useHistory();
  let location = useLocation();
  let { url } = useRouteMatch();
  const [user] = useUser();
  return (
    <>
      <PositionContainer>
        <NameContainer>
          <CloseButton onClick={handleClose}>
            <Clear />
          </CloseButton>
          <FlexDiv>Hallo {user}</FlexDiv>
        </NameContainer>

        <NavigationMenuButton
          onClick={() => history.push("/library/browse")}
          selected={
            location.pathname === `${url}/browse` ||
            location.pathname === `${url}/games` ||
            location.pathname === `${url}/wishlist`
          }
        >
          <Dice
            selected={
              location.pathname === `${url}/browse` ||
              location.pathname === `${url}/games` ||
              location.pathname === `${url}/wishlist`
            }
          />
          Library
        </NavigationMenuButton>
        <NavigationMenuButton
          onClick={() => {
            unsetUser();
            localStorage.clear();
            history.push("/");
          }}
        >
          <Logout />
          Logout
        </NavigationMenuButton>
        <NavigationMenuButton
          onClick={() => {
            history.push("/user/overview");
          }}
          selected={
            location.pathname === `${url}/overview` ||
            location.pathname === `${url}/statistics` ||
            location.pathname === `${url}/friends`
          }
        >
          <Person
            selected={
              location.pathname === `${url}/overview` ||
              location.pathname === `${url}/statistics` ||
              location.pathname === `${url}/friends`
            }
          />
          User
        </NavigationMenuButton>
      </PositionContainer>
    </>
  );
}
