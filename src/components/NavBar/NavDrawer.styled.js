import styled from "styled-components";

export default styled.div`
  height: 100%;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  transition: transform 0.3s ease-out;
  transform: ${(props) => (props.visible ? "translateX(100%)" : "translateX(0)")};
`;
