import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
<<<<<<< HEAD
  Route,
  Link,
=======
  Switch,
  Route,
  Link,
  useParams,
>>>>>>> master
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
<<<<<<< HEAD
  let { url } = useRouteMatch();
  return (
    <NavGrid>
      <StyledLink to={`${url}/Collection`}>
        <NavGridButton
          selected={selected === "Collection"}
          value="Collection"
          onClick={event => onNavigationChange(event.target.innerHTML)}
        >
          Collection
        </NavGridButton>
      </StyledLink>
      <StyledLink to={`${url}/Browse`}>
        <NavGridButton
          selected={selected === "Browse"}
          value="Browse"
          onClick={event => onNavigationChange(event.target.innerHTML)}
        >
          Browse
        </NavGridButton>
      </StyledLink>
      <StyledLink to={`${url}/Wishlist`}>
        <NavGridButton
          selected={selected === "Wishlist"}
          value="Wishlist"
          onClick={event => onNavigationChange(event.target.innerHTML)}
        >
          Wishlist
        </NavGridButton>
      </StyledLink>
=======
  let { path, url } = useRouteMatch();
  return (
    <NavGrid>
      <NavGridButton
        selected={selected === "Collection"}
        value="Collection"
        onClick={event => onNavigationChange(event.target.innerHTML)}
      >
        <Link to={`${url}/Collection`}>Collection</Link>
      </NavGridButton>
      <NavGridButton
        selected={selected === "Browse"}
        value="Browse"
        onClick={event => onNavigationChange(event.target.innerHTML)}
      >
        Browse
      </NavGridButton>
      <NavGridButton
        selected={selected === "Wishlist"}
        value="Wishlist"
        onClick={event => onNavigationChange(event.target.innerHTML)}
      >
        Wishlist
      </NavGridButton>
>>>>>>> master
    </NavGrid>
  );
}
