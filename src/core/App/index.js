import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Navigation } from "../../common/Navigation";
import { Container } from "./styled";
import { MovieList } from "../../features/MovieList";

export const App = () => (
  <HashRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Container>
        <MovieList />
      </Container>
    </ThemeProvider>
  </HashRouter>
);
