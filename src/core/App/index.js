import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Navigation } from "../../common/Navigation";
import { Container } from "./styled";
import { MovieList } from "../../features/Movies/MovieList";
import { MoviePage } from "../../features/Movies/MoviePage";
import { People } from "../../features/Peoples/PeopleList";
import { Profile } from "../../features/Peoples/Profile";

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
