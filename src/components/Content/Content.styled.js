import styled from "styled-components/macro";

export default {
  Main: styled.main`
    display: flex;
    width: 100%;
    background-color: ${(props) => props.theme.mainBackgroundColor};
  `,
};
