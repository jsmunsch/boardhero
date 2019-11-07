import React from "react";
import styled, { keyframes } from "styled-components";
import NavigationMenuButton from "./library/NavigationMenuButton";
import Dice from "../icons/Dice";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import Logout from "../icons/Logout";
import { Link } from "react-router-dom";

import { useUser } from "../hooks";
import { unsetUser } from "../api/fetchUser";
import Person from "../icons/Person";

const morph = keyframes`
  0% { width: 0px;}
  100% { width: 100%}
`;

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
  animation: ${morph} 0.3s ease-in-out;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  height: inherit;
  line-height: inherit;
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
  let history = useHistory();
  let location = useLocation();
  let { url } = useRouteMatch();
  const [user] = useUser();
  return (
    <>
      <PositionContainer>
        <NameContainer>Hallo {user}</NameContainer>
        <NavigationMenuButton
          onClick={() => history.push("/library/browse")}
          selected={
            `${url}/browse` === `${url}/browse` ||
            location.pathname === `${url}/collection` ||
            location.pathname === `${url}/wishlist`
          }
        >
          <Dice
            selected={
              `${url}/browse` === `${url}/browse` ||
              location.pathname === `${url}/collection` ||
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
