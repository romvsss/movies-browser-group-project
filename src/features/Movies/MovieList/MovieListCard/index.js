import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularMovies,
  selectMovieList,
  selectStatus,
  selectPage,
} from "../../movieSlice";
import {
  MovieTile,
  Poster,
  HeaderContainer,
  Title,
  Year,
  GenreButtons,
  GenreButton,
  RatingContainer,
  Star,
  Rate,
  Votes,
} from "./styled";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

const GENRES = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export const MovieListCard = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovieList);
  const status = useSelector(selectStatus);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchPopularMovies(page));
  }, [dispatch, page]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Ups! Nie udało się pobrać danych.</p>;

  return (
    <>
      {movies.map((movie) => {
        const year = movie.release_date?.slice(0, 4) || "—";
        const genres = movie.genre_ids?.map((id) => GENRES[id]).filter(Boolean);

        return (
          <MovieTile key={movie.id}>
            {movie.poster_path && (
              <Poster
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
            )}

            <HeaderContainer>
              <Title>{movie.title}</Title>
              <Year>{year}</Year>

              <GenreButtons>
                {genres.slice(0, 3).map((genre) => (
                  <GenreButton key={genre}>{genre}</GenreButton>
                ))}
              </GenreButtons>

              <RatingContainer>
                <Star />
                <Rate>{movie.vote_average.toFixed(1)}</Rate>
                <span>/</span>
                <Votes>{movie.vote_count}</Votes>
              </RatingContainer>
            </HeaderContainer>
          </MovieTile>
        );
      })}
    </>
  );
};