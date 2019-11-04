import React from "react";
import styled from "styled-components";

function LogoutIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35.109"
      height="37.45"
      viewBox="0 0 35.109 37.45"
      className={className}
    >
      <path
        d="M28.088,23.406V18.725h-11.7V14.044h11.7V9.363l7.022,7.022Zm-2.341-2.341v9.363h-11.7V37.45L0,30.428V0H25.747V11.7H23.406V2.341H4.681l9.363,4.681V28.088h9.363V21.066Z"
        fill="none"
      />
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
