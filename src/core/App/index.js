import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {/* normalize.css and added styles check up */}
    <div style={{ background: "white", padding: "10px" }}>
      <h1>Movies Browser App</h1>
    </div>
    {/* normalize.css and added styles check up */}
  </ThemeProvider>
);
