import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const NavGrid = styled.div`
  display: grid;
  height: 60px;
  grid-template-columns: 1fr 1fr 1fr;
  border: none;
`;

const NavGridButton = styled.button`
  color: ${props => (props ? "white" : props.theme.darkFont)};
  background: ${props => props.theme.accent};
  font-size: 20px;
  display: flex;
  width: 100%;
  height: inherit;
  align-items: center;
  justify-content: center;
  border: none;
  border-bottom: ${props =>
    props.selected ? `6px solid ${props.theme.brightEffect}` : "none"};
  color: ${props => (props.selected ? "white" : props.theme.darkFont)};
  outline: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  height: inherit;
`;

export default function LibraryNav({ selected, onNavigationChange }) {
  let { url } = useRouteMatch();
  return (
    <NavGrid>
      <StyledLink to={`${url}/games`}>
        <NavGridButton
          selected={selected === "Games"}
          value="games"
          onClick={event => onNavigationChange(event.target.innerHTML)}
        >
          Games
        </NavGridButton>
      </StyledLink>
      <StyledLink to={`${url}/browse`}>
        <NavGridButton
          selected={selected === "Browse"}
          value="browse"
          onClick={event => onNavigationChange(event.target.innerHTML)}
        >
          Browse
        </NavGridButton>
      </StyledLink>
      <StyledLink to={`${url}/wishlist`}>
        <NavGridButton
          selected={selected === "Wishlist"}
          value="wishlist"
          onClick={event => onNavigationChange(event.target.innerHTML)}
        >
          Wishlist
        </NavGridButton>
      </StyledLink>
    </NavGrid>
  );
}