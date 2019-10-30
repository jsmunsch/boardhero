import styled from "styled-components";

const InputField = styled.input`
  padding: 10px;
  margin-top: 10px;
  font-size: 1.2em;
  width: inherit;
  border-radius: 2px;
  outline: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  border: none;
  background-color: ${props =>
    props.highlight ? props.theme.brightEffect : "white"};
`;

export default InputField;
