import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Navigation } from "../../common/Navigation";
import { Container } from "./styled";

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Navigation />
      <Container>
        {/* normalize.css and added styles check up */}
        <div style={{ background: "white", padding: "10px" }}>
          <h1>Movies Browser App!</h1>
        </div>
        {/* normalize.css and added styles check up */}
      </Container>
  </ThemeProvider>
);
