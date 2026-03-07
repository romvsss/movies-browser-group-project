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
import { Container, Wrapper } from "./styled";
import { MovieListCard } from "./MovieListCard";
import { Pagination, maxPageSize } from "../../../common/Pagination";
import { MovieListHeader } from "./MovieListHeader";
import { MovieListContent } from "./MovieListContent";

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
      searchParams.set("page", newPage);
      navigate(`?${searchParams.toString()}`);
    }
  };

  return (
    <Wrapper>
      <MovieListHeader
        query={query}
        status={status}
        totalResults={totalResults}
      />

      <MovieListContent
        status={status}
        isNoResults={isNoResults}
        query={query}
      >
        <>
          <Container>
            <MovieListCard movies={movies} genresMap={genresMap} />
          </Container>

          <Pagination
            page={page}
            totalPages={Math.min(totalPages, maxPageSize)}
            onPageChange={onPageChange}
          />
        </>
      </MovieListContent>
    </Wrapper>
  );
};