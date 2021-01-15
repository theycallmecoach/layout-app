import styled from "styled-components/macro";

export default {
  Vertical: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 10;
    width: ${(props) => props.theme.navigationToolBarWidth};
    background: ${(props) => props.theme.navBackgroundColor};
    /* padding: 6px 8px; */
    /* margin: 6px 8px; */
  `,
  Horizontal: styled.div`
    display: flex;
    width: 300px;
    /* background: #d6e2ea; */
    padding: 6px 8px;
  `,
};
