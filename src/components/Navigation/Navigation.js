import { useRef } from "react";
import Toolbar from "components/Toolbar";
import Button from "components/Button";
import useToggle from "hooks/useToggle";
import { CSSTransition } from "react-transition-group";

import S from "./Navigation.styled";

const Navigation = () => {
  const [isDrawerVisible, toggleDrawerVisible] = useToggle(false);
  const nodeRef = useRef(null);

  const onHelloClicked = () => {
    toggleDrawerVisible();
  };

  // useEffect(() => {
  //   if (isDrawerVisible) {
  //     drawer = <S.Drawer>Hello</S.Drawer>;
  //   }

  // }, [isDrawerVisible])

  // const drawer = isDrawerVisible ? <S.Drawer visible={isDrawerVisible}>Hello</S.Drawer> : null;

  return (
    <S.Container>
      <Toolbar orientation="vertical">
        <Button onClick={onHelloClicked}>Hello</Button>
        <div style={{ flex: 1 }} />
        <Button>GoodBye</Button>
      </Toolbar>
      <CSSTransition
        nodeRef={nodeRef}
        in={isDrawerVisible}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames="drawer"
        unmountOnExit
      >
        <S.Drawer ref={nodeRef}>
          Hello Big
          <p />
          Hello Big
          <p />
          Hello Big
          <p />
          Hello Big
          <p />
          Hello Big
          <p />
          Hello Big
          <p />
          Hello Big
          <p />
          Hello Big
          <p />
          Hello Big
          <p />
        </S.Drawer>
      </CSSTransition>
    </S.Container>
  );
};

export default Navigation;
