import styled from "styled-components/macro";

export default {
  Container: styled.div`
    display: flex;
    transition: width 100ms ease;
    background: green;
  `,
  Drawer: styled.div`
    height: 100%;
    width: 100%;
    background: white;
    position: relative;
    /* top: 0;
    left: 0; */
    z-index: 9;

    /* &.drawer-appear {
      opacity: 0;
      transform: translateX(-100%);
      position: absolute; 
    }

    &.drawer-appear-active {
       opacity: 0;
      transition: transform 1s ease-out;
      transform: translateX(100%);
      position: absolute; 
    }*/

    &.drawer-enter {
      /* opacity: 0; */
      transform: translateX(-100%);
      /* transform: scale(0.9); */
    }

    &.drawer-enter-active {
      /* opacity: 1; */
      transform: translateX(0);
      transition: transform 1000ms ease-out;
    }

    &.drawer-exit {
      /* opacity: 1; */
    }

    &.drawer-exit-active {
      /* opacity: 0; */
      transform: translateX(-100%);
      /* transform: scale(0.9); */
      /* transition: opacity 300ms, transform 300ms; */
      transition: transform 1000ms ease-in;
    }
  `,
};
