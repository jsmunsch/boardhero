import styled from "styled-components";

const StyledText = styled.text`
  font-size: 24px;
  font-family: Roboto;
  color: ${props =>
    props.selected ? props.theme.lightFont : props.theme.lightFont};
  margin-left: 15px;
`;

export default StyledText;
