import { StyledHeader, Container, Wrapper } from "./styled";
import { MovieListCard } from "./MovieListCard";

export const MovieList = () => {
  return (
    <Wrapper>
      <StyledHeader>Popular movies</StyledHeader>
      <Container>
        <MovieListCard />
      </Container>
    </Wrapper>
  );
};
