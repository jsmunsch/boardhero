import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import BurgerMenu from "../icons/BurgerMenu";
import Magnifier from "../icons/Magnifier";
import VerticalPoints from "../icons/VerticalPoints";

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

const HeaderRightContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  color: white;
  position: relative;
`;

export default function Header({ toggleOptions }) {
  return (
    <HeaderContainer>
      <IconButton>
        <BurgerMenu />
      </IconButton>
      Library
      <HeaderRightContainer>
        <IconButton>
          <Magnifier />
        </IconButton>
        <IconButton onClick={toggleOptions}>
          <VerticalPoints />
        </IconButton>
      </HeaderRightContainer>
    </HeaderContainer>
  );
}
