import styled from "styled-components";

const NavigationMenuButton = styled.button`
  display: flex;
  width: inherit;
  height: 8vh;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  border-left: ${props => (props.selected ? "3px solid #F0A42A" : "none")};
  background-color: ${props =>
    props.selected ? props.theme.highlight : props.theme.accent};
  color: ${props =>
    props.selected ? props.theme.lightFont : props.theme.darkFont};
  font-size: 20px;
`;

export default NavigationMenuButton;
