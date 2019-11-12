import styled from "styled-components";

const DescriptionContainer = styled.div`
  display: flex;
  fill: white;
  color: white;
  justify-content: center;
  margin: 0px 20px 0 10px;
  max-height: 40vh;
  @media (min-height: 750px) {
    max-height: 35vh;
  }
  overflow-x: scroll;
  font-size: 1.2em;
`;

export default DescriptionContainer;
