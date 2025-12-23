import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchPopularMovies,
  fetchSearchMovies,
  fetchGenres,
  selectMovieList,
  selectStatus,
  selectTotalPages,
  selectTotalResults,
  selectGenres,
} from "../movieSlice";
import { StyledHeader, Container, Wrapper } from "./styled";
import { MovieListCard } from "./MovieListCard";
import { SpinnerWrapper, StyledSpinner } from "../../../common/Loading/styled";
import { Error } from "../../../common/Error/index";
import { NoResults } from "../../../common/NoResults/index";
import { Pagination } from "../../../common/Pagination";

export const MovieList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page"))
    : 1;

  const movies = useSelector(selectMovieList);
  const status = useSelector(selectStatus);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);
  const genresMap = useSelector(selectGenres);
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchMovies({ query, page }));
    } else {
      dispatch(fetchPopularMovies(page));
    }
  }, [dispatch, query, page]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const isNoResults = status === "success" && query && totalResults === 0;

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
        <StyledHeader>
          {query ? (
            status === "success" && totalResults === 0 ? (
              <>Sorry, there are no results for "{query}"</>
            ) : (
              <>
                Search results for "{query}"
                {status === "success" && totalResults > 0 && (
                  <> ({totalResults})</>
                )}
              </>
            )
          ) : (
            "Popular movies"
          )}
        </StyledHeader>
      )}

      {status === "loading" && (
        <SpinnerWrapper>
          <StyledSpinner />
        </SpinnerWrapper>
      )}

      {status === "success" && (
        <>
          {isNoResults ? (
            <NoResults query={query} />
          ) : (
            <>
              <Container>
                <MovieListCard movies={movies} genresMap={genresMap} />
              </Container>

              <Pagination
                page={page}
                totalPages={totalPages > 500 ? 500 : totalPages}
                onPageChange={onPageChange}
              />
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};
