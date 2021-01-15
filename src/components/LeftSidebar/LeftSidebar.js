import Toolbar from "components/Toolbar";
import { useRef, useState } from "react";
import Button from "components/Button";
import useToggle from "hooks/useToggle";
import { CSSTransition } from "react-transition-group";

import S from "./Leftsidebar.styled";

const LeftSidebar = () => {
  const [isDrawerVisible, toggleDrawerVisible] = useToggle(false);
  const nodeRef = useRef(null);
  const [drawerWidth] = useState("240px");

  const onHelloClicked = () => {
    toggleDrawerVisible();
  };

  return (
    <S.Container>
      <Toolbar orientation="vertical">
        <Button onClick={onHelloClicked}>L1</Button>
        <Button>L2</Button>
      </Toolbar>
      <CSSTransition nodeRef={nodeRef} in={isDrawerVisible} appear timeout={500} classNames="drawer" unmountOnExit>
        <S.Drawer ref={nodeRef} drawerWidth={drawerWidth}>
          Hello Left
          <p />
          Hello Left
          <p />
          Hello Left
          <p />
          Hello Left
          <p />
          Hello Left
          <p />
          Hello Left
          <p />
          Hello Left
          <p />
          Hello Left
          <p />
          Hello Left
          <p />
        </S.Drawer>
      </CSSTransition>
    </S.Container>
  );
};
export default LeftSidebar;
