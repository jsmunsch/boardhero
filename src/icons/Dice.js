import React from "react";
import styled from "styled-components";

function Cubes({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29.716 29.716"
      className={className}
    >
      <path
        id="dice"
        d="M25.073,5.572H10.215a4.657,4.657,0,0,0-4.643,4.643V25.073a4.657,4.657,0,0,0,4.643,4.643H25.073a4.657,4.657,0,0,0,4.643-4.643V10.215A4.657,4.657,0,0,0,25.073,5.572ZM12.072,26a2.786,2.786,0,1,1,2.786-2.786A2.786,2.786,0,0,1,12.072,26Zm0-11.144a2.786,2.786,0,1,1,2.786-2.786A2.786,2.786,0,0,1,12.072,14.858Zm5.572,5.572a2.786,2.786,0,1,1,2.786-2.786A2.786,2.786,0,0,1,17.644,20.43ZM23.216,26A2.786,2.786,0,1,1,26,23.216,2.786,2.786,0,0,1,23.216,26Zm0-11.144A2.786,2.786,0,1,1,26,12.072,2.786,2.786,0,0,1,23.216,14.858Zm.835-11.144A4.662,4.662,0,0,0,19.5,0H4.643A4.657,4.657,0,0,0,0,4.643V19.5a4.662,4.662,0,0,0,3.715,4.549V5.572A1.863,1.863,0,0,1,5.572,3.715Z"
      />
    </svg>
  );
}

const DiceStyled = styled(Cubes)`
  fill: ${props =>
    props.selected ? props.theme.lightFont : props.theme.darkFont};
  height: 28px;
  width: 28px;
`;

export default function Dice({ selected }) {
  return <DiceStyled selected={selected} />;
}
