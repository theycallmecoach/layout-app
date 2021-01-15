import styled from "styled-components/macro";

export default {
  LayoutContainer: styled.div`
    height: 100%;
    outline: none;
    display: grid;
    grid-template-columns: ${(props) => props.theme.leftPanelWidth} minmax(0, 1fr) ${(props) =>
        props.theme.rightPanelWidth};
    grid-template-rows: ${(props) => props.theme.bannerHeight} ${(props) => props.theme.topNavigationHeight} auto ${(
        props
      ) => props.theme.footerHeight};
    grid-template-areas:
      "left-panel banner right-panel"
      "left-panel top-navigation right-panel"
      "left-panel content right-panel"
      "left-panel footer right-panel";
  `,

  LeftPanel: styled.div`
    grid-area: left-panel;
  `,

  RightPanel: styled.div`
    grid-area: right-panel;
  `,

  TopNavigation: styled.div`
    grid-area: top-navigation;
    position: fixed;
    height: 0px;
    top: 0px;
    left: 0px;
    right: 0px;
  `,

  Banner: styled.div`
    grid-area: banner;
    background: red;
  `,

  Footer: styled.div`
    grid-area: footer;
    background: grey;
  `,

  Contents: styled.div`
    grid-area: content;
    height: 100%;
    width: 100%;
    overflow: auto;
    position: relative;
    display: flex;
  `,
};
