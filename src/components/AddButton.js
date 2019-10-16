import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonContainer = styled.button`
  border-radius: 50%;
  background-color: red;
  position: absolute;
  bottom: -20px;
  left: 40px;
  height: 60px;
  width: 60px;
  color: white;
`;

export default function AddButton({ children }) {
  return <ButtonContainer>{children}</ButtonContainer>;
}

AddButton.propTypes = {
  children: PropTypes.node.isRequired
};
