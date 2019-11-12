import styled from "styled-components";

const ModalContainer = styled.div`
  width: 320px;
  height: 480px;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  margin-top: -240px;
  background: ${props => props.theme.main};
  position: fixed;
  z-index: 2;
  border: 4px solid white;
  border-radius: 15px;
  backdrop-filter: blur(2px);
`;

export default ModalContainer;
