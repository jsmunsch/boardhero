import styled from "styled-components";

const RemoveButton = styled.button`
  border-radius: 15px;
  background-color: ${props => props.theme.brightEffect};
  position: absolute;
  bottom: 10px;
  right: 50%;
  margin-right: -65px;
  height: 40px;
  width: 130px;
  border: none;
  outline: none;
  box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.15);
  font-size: 1.1em;
  color: white;
`;

export default RemoveButton;
