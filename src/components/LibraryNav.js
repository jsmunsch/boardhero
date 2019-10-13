import React from "react";
import styled from "styled-components";

const NavGrid = styled.div`
  display: grid;
<<<<<<< HEAD
  height: 60px;
=======
  height: 75px;
>>>>>>> master
  grid-template-columns: 1fr 1fr 1fr;
  border: none;
`;

const NavGridButton = styled.button`
  color: ${props => (props ? "white" : props.theme.darkFont)};
  background: ${props => props.theme.accent};
<<<<<<< HEAD
  font-size: 20px;
=======
  font-size: 22px;
>>>>>>> master
  display: flex;
  width: 100%;
  height: inherit;
  align-items: center;
  justify-content: center;
  border: none;
  border-bottom: ${props =>
<<<<<<< HEAD
    props.selected ? `6px solid ${props.theme.brightEffect}` : "none"};
  color: ${props => (props.selected ? "white" : props.theme.darkFont)};
  outline: none;
`;

export default function LibraryNav({ selected, onClick }) {
  return (
    <NavGrid>
      <NavGridButton
        selected={selected === "Collection"}
        onClick={() => onClick("Collection")}
      >
        Collection
      </NavGridButton>
      <NavGridButton
        selected={selected === "Browse"}
        onClick={() => onClick("Browse")}
      >
        Browse
      </NavGridButton>
      <NavGridButton
        selected={selected === "Wishlist"}
        onClick={() => onClick("Wishlist")}
      >
        Wishlist
      </NavGridButton>
=======
    props.selected ? `8px solid ${props.theme.brightEffect}` : "none"};
  color: ${props => (props.selected ? "white" : props.theme.darkFont)};
`;

export default function LibraryNav() {
  return (
    <NavGrid>
      <NavGridButton selected>Collection</NavGridButton>
      <NavGridButton>Browse</NavGridButton>
      <NavGridButton>Wishlist</NavGridButton>
>>>>>>> master
    </NavGrid>
  );
}
