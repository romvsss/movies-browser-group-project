import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchPopularMovies,
  selectMovieList,
  selectStatus,
  selectTotalPages,
} from "../movieSlice";
import { StyledHeader, Container, Wrapper, SpinnerWrapper } from "./styled";
import { MovieListCard } from "./MovieListCard";
import { StyledSpinner } from "../../../common/Navigation/SearchBar/Content/Loading/styled";
import { Error } from "../../../common/Navigation/SearchBar/Content/Error/index";
import { Pagination } from "../../../common/Pagination";

export const MovieList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1;

  const movies = useSelector(selectMovieList);
  const status = useSelector(selectStatus);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchPopularMovies(page));
  }, [dispatch, page]);

  const onPageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      navigate(`?page=${newPage}`);
    }
  };

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
        <>
          <Container>
            <MovieListCard movies={movies} />
          </Container>

          <Pagination
            page={page}
            totalPages={totalPages > 500 ? 500 : totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </Wrapper>
  );
};
