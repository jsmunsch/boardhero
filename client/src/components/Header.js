import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import BurgerMenu from "../icons/BurgerMenuIcon";
import Magnifier from "../icons/Magnifier";
import VerticalPoints from "../icons/VerticalPoints";
import SearchBar from "./library/SearchBar";
import BurgerMenuList from "./BurgerMenuList";
import { useOnClickOutside } from "../hooks";
import OptionBox from "./library/OptionBox";
import SortModal from "./library/SortModal";
import { Background } from "./popup-card/CardModal";
import AxeViking from "../icons/AxeViking";

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

const PageSpan = styled.span``;
export default function Header({
  toggleOptions,
  toggleSearchbar,
  active,
  handleInputChange,
  onSearch,
  page
}) {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => {
    setShowMenu(false);
    setShowOptions(false);
    setShowSort(false);
  });
  return (
    <>
      {showMenu && (
        <>
          <Background />
          <div ref={node}>
            <BurgerMenuList handleClose={() => setShowMenu(false)} />
          </div>
        </>
      )}

      <HeaderContainer>
        <IconButton onClick={() => setShowMenu(!showMenu)}>
          <BurgerMenu />
        </IconButton>
        <PageSpan page={page}>{page}</PageSpan>
        <AxeViking />
        <SearchBar
          active={active}
          onChange={event => handleInputChange(event)}
          onSearch={onSearch}
        />
        <IconButton onClick={toggleSearchbar}>
          <Magnifier />
        </IconButton>
        <IconButton onClick={toggleOptions}>
          <VerticalPoints />
        </IconButton>
        {showOptions && (
          <div ref={node}>
            <OptionBox />
            {showSort && <SortModal />}
          </div>
        )}
      </HeaderContainer>
    </>
  );
}
