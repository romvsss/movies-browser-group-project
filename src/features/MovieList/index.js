import { StyledHeader, Container, Wrapper } from "./styled";
import { MovieListCard } from "./MovieListCard";

export const MovieList = () => {
  return (
    <Wrapper>
      <StyledHeader>Popular movies</StyledHeader>
      <Container>
        {Array.from({ length: 500 }).map((_, index) => (
          <MovieListCard key={index} />
        ))}
        <MovieListCard />
      </Container>
    </Wrapper>
  );
};
