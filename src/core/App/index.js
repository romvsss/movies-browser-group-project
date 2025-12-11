import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Navigation } from "../../common/Navigation";
import { Container } from "./styled";
import { MovieList } from "../../features/MovieList";
import { MoviePage } from "../../features/MoviePage";
import { People } from "../../features/People";
import { Profile } from "../../features/Profile";

export const App = () => (
  <HashRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/movies" replace />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/people" element={<People />} />
          <Route path="/person/:id" element={<Profile />} />
        </Routes>
      </Container>
    </ThemeProvider>
  </HashRouter>
);
