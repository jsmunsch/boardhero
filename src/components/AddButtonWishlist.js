import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonContainer = styled.button`
  border-radius: 50%;
  background-color: blue;
  position: absolute;
  bottom: -20px;
  left: 180px;
  height: 60px;
  width: 60px;
  fill: white;
`;

export default function AddButtonWishlist({ children, handleAddButton }) {
  return (
    <ButtonContainer onClick={handleAddButton}>{children}</ButtonContainer>
  );
}

AddButtonWishlist.propTypes = {
  children: PropTypes.node.isRequired
};
