import React from "react";
import styled from "styled-components";

function LogoutIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
    </svg>
  );
}

const LogoutIconStyled = styled(LogoutIcon)`
  fill: ${props =>
    props.selected ? props.theme.lightFont : props.theme.darkFont};
  height: 32px;
  width: 32px;
  margin-right: 5px;
`;

export default function Logout({ selected }) {
  return <LogoutIconStyled selected={selected} />;
}
