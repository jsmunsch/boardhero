import styled from "styled-components";

const GameName = styled.h1`
  color: ${props => props.theme.brightEffect};
  text-align: center;
  line-height: 26px;
  z-index: 20;
  font-size: 2em;
`;

export default GameName;
