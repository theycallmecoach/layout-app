// import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import defaultTheme from "themes/Default";
import GlobalStyles from "themes/GlobalStyles";
import L from "layouts/DefaultLayout";
import Header from "components/Header";
import Content from "components/Content";
import LeftSidebar from "components/LeftSidebar";
import RightSidebar from "components/RightSidebar";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <L.LayoutContainer>
          <L.TopNavigation>
            <Header />
          </L.TopNavigation>
          <L.Contents>
            <LeftSidebar />
            <Content />
            <RightSidebar />
          </L.Contents>
          <L.Footer>
            <footer>Footer</footer>
          </L.Footer>
        </L.LayoutContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
