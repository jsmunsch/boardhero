import React from "react";
import styled from "styled-components";

function ClearIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      className={className}
      fill="white"
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

const StyledClearIcon = styled(ClearIcon)``;
export default function Clear({ onClick }) {
  return <StyledClearIcon onClick={onClick} />;
}
