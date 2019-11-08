import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 10px;
  font-size: 1.1em;
  border-bottom: ${props =>
    props.selected ? `3px solid ${props.theme.brightEffect}` : "none"};
`;

export default StyledLink;
