import React from "react";
import styled from "styled-components";

function Cubes({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
      <circle cx="7.5" cy="16.5" r="1.5" />
      <circle cx="7.5" cy="7.5" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="16.5" cy="16.5" r="1.5" />
      <circle cx="16.5" cy="7.5" r="1.5" />
    </svg>
  );
}

const DiceStyled = styled(Cubes)`
  fill: ${props =>
    props.selected ? props.theme.lightFont : props.theme.darkFont};
  height: 32px;
  width: 32px;
  margin-right: 5px;
`;

export default function Dice({ selected }) {
  return <DiceStyled selected={selected} />;
}
