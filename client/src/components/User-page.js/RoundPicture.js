import styled from "styled-components";

const PictureContainer = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.brightEffect};
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
`;

export default PictureContainer;
