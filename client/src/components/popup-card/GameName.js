import styled from "styled-components";

const GameName = styled.h1`
  color: ${props => props.theme.brightEffect};
  text-align: center;
  z-index: 20;
  font-size: 1.8em;
  margin: 30px 0 15px 0;
`;

export default GameName;
