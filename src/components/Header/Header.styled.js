import styled from "styled-components/macro";

export default {
  Header: styled.header`
    height: ${(props) => props.theme.topNavigationHeight};
    background-color: ${(props) => props.theme.headerBackgroundColor};
  `,
};
