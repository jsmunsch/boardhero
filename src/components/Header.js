import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import BurgerMenu from "../icons/BurgerMenu";

const HeaderContainer = styled.header`
  display: flex;
  width: 100vw;
  justify-content: start;
  background-color: ${props => props.theme.lightBackground};
`;

const StyledText = styled.text`
  text-align: center;
  color: white;
  line-height: 2.4;
  padding-left: 5px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <IconButton>
        <BurgerMenu />
      </IconButton>
      <StyledText>Collection</StyledText>
    </HeaderContainer>
  );
}
