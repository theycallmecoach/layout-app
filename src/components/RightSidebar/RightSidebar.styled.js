import styled from "styled-components/macro";

export default {
  Container: styled.div`
    flex: 1;
    position: relative;
    display: flex;
    right: ${(props) => props.theme.rightPanelWidth};
    /* top: calc(${(props) => props.theme.bannerHeight} + ${(props) => props.theme.topNavigationHeight}); */
    top: 0px;
    bottom: calc(${(props) => props.theme.footerHeight});
  `,
  Drawer: styled.div`
    flex: 1;
    height: 100%;
    /* width: ${(props) => props.drawerWidth}; */
    background: white;
    position: relative;
    /* top: 0;
    left: 0; */
    z-index: 9;

    /* &.drawer-appear {
      transform: scale(0%);
    }

    &.drawer-appear-active {
      transition: transform 300ms ease-out;
      transform: scale(100%);
    } */

    &.drawer-enter {
      opacity: 0;
      width: 0px;
      transform: translateX(100%);
      /* transform: scale(0.9); */
    }

    &.drawer-enter-active {
      opacity: 1;
      width: ${(props) => props.drawerWidth};
      transform: translateX(0);
      transition: 300ms cubic-bezier(0.2, 0, 0, 1) 0s;
    }

    &.drawer-enter-done {
      width: ${(props) => props.drawerWidth};
    }

    &.drawer-exit {
      opacity: 1;
      width: ${(props) => props.drawerWidth};
    }

    &.drawer-exit-active {
      opacity: 0;
      transform: translateX(100%);
      /* transform: scale(0.9); */
      /* transition: opacity 300ms, transform 300ms; */
      width: 0px;
      transition: 300ms cubic-bezier(0.2, 0, 0, 1) 0s;
    }
  `,
};
