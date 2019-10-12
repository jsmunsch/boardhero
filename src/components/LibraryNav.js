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
`;

export default function LibraryNav() {
  return (
    <NavGrid>
      <NavGridButton selected>Collection</NavGridButton>
      <NavGridButton>Browse</NavGridButton>
      <NavGridButton>Wishlist</NavGridButton>
    </NavGrid>
  );
}
