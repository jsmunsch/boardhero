import React from "react";
import styled from "styled-components";

const Players = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0px 4px;
  fill: white;
  color: ${props => props.theme.brightEffect};
  font-size: 1.6em;
`;

export default Players;
