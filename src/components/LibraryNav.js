import React from "react";
import styled from "styled-components";

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

export default function LibraryNav({ selected, onNavigationChange }) {
  return (
    <NavGrid>
      <NavGridButton
        selected={selected === "Collection"}
        value="Collection"
        onClick={event => onNavigationChange(event.target.innerHTML)}
      >
        Collection
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
    </NavGrid>
  );
}
