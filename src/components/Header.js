import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import BurgerMenu from "../icons/BurgerMenu";
import Magnifier from "../icons/Magnifier";
import VerticalPoints from "../icons/VerticalPoints";
import SearchBar from "./SearchBar";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.lightBackground};
  color: white;
  height: 60px;
  font-size: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
`;
export default function Header({ toggleOptions, toggleSearchbar, active }) {
  return (
    <HeaderContainer>
      <IconButton>
        <BurgerMenu />
      </IconButton>
      Library
      <SearchBar active={active} />
      <IconButton onClick={toggleSearchbar}>
        <Magnifier />
      </IconButton>
      <IconButton onClick={toggleOptions}>
        <VerticalPoints />
      </IconButton>
    </HeaderContainer>
  );
}
