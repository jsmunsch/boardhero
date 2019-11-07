import React from "react";
import styled from "styled-components";
import StyledLink from "./UserNavigation";
import {
  BrowserRouter as Router,
  useRouteMatch,
  useLocation
} from "react-router-dom";

const ScrollBar = styled.div`
  display: flex;
  height: 8%;
  overflow-x: auto;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid ${props => props.theme.brightEffect};
  border-bottom: 1px solid ${props => props.theme.brightEffect};
`;

export default function NavBar() {
  let { url } = useRouteMatch();
  let location = useLocation();
  return (
    <ScrollBar>
      <StyledLink
        to={`${url}/overview`}
        selected={location.pathname === `${url}/overview`}
      >
        Overview
      </StyledLink>
      <StyledLink
        to={`${url}/statistics`}
        selected={location.pathname === `${url}/statistics`}
      >
        Statistics
      </StyledLink>
      <StyledLink
        to={`${url}/friends`}
        selected={location.pathname === `${url}/friends`}
      >
        Friends
      </StyledLink>
    </ScrollBar>
  );
}
