import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularMovies,
  selectMovieList,
  selectStatus,
  selectPage,
} from "../movieSlice";
import { StyledHeader, Container, Wrapper, SpinnerWrapper } from "./styled";
import { MovieListCard } from "./MovieListCard";
import { StyledSpinner } from "../../../common/Navigation/SearchBar/Content/Loading/styled";
import { Error } from "../../../common/Navigation/SearchBar/Content/Error/index";

export const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovieList);
  const status = useSelector(selectStatus);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchPopularMovies(page));
  }, [dispatch, page]);

  if (status === "error") {
    return <Error />;
  }

  return (
    <Wrapper>
      {(status === "loading" || status === "success") && (
        <StyledHeader>Popular movies</StyledHeader>
      )}

      {status === "loading" && (
        <SpinnerWrapper>
          <StyledSpinner />
        </SpinnerWrapper>
      )}

      {status === "success" && (
        <Container>
          <MovieListCard movies={movies} />
        </Container>
      )}
    </Wrapper>
  );
};
