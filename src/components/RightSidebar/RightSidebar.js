import Toolbar from "components/Toolbar";
import { useRef, useState } from "react";
import Button from "components/Button";
import useToggle from "hooks/useToggle";
import { CSSTransition } from "react-transition-group";

import S from "./RightSidebar.styled";

const RightSidebar = () => {
  const [isDrawerVisible, toggleDrawerVisible] = useToggle(false);
  const nodeRef = useRef(null);
  const [drawerWidth] = useState("240px");

  const onHelloClicked = () => {
    toggleDrawerVisible();
  };

  return (
    <S.Container>
      <CSSTransition nodeRef={nodeRef} in={isDrawerVisible} appear timeout={500} classNames="drawer" unmountOnExit>
        <S.Drawer ref={nodeRef} drawerWidth={drawerWidth}>
          Hello Right
          <p />
          Hello Right
          <p />
          Hello Right
          <p />
          Hello Right
          <p />
          Hello Right
          <p />
          Hello Right
          <p />
          Hello Right
          <p />
          Hello Right
          <p />
          Hello Right
          <p />
        </S.Drawer>
      </CSSTransition>
      <Toolbar orientation="vertical">
        <Button onClick={onHelloClicked}>R1</Button>
        <Button>R2</Button>
      </Toolbar>
    </S.Container>
  );
};
export default RightSidebar;
