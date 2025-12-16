import {
  MovieTile,
  Poster,
  PosterPlaceholder,
  HeaderContainer,
  Title,
  Year,
  GenresWrapper,
  Genre,
  RatingContainer,
  Star,
  Rate,
  Votes,
} from "./styled";
import { ReactComponent as PosterPlaceholderSvg } from "../../../../images/video.svg";

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

export const MovieListCard = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {
        const year = movie.release_date?.slice(0, 4) || "—";
        const genres = movie.genre_ids?.map((id) => GENRES[id]).filter(Boolean);

        return (
          <MovieTile key={movie.id} to={`/movies/${movie.id}`}>
            {movie.poster_path ? (
              <Poster
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <PosterPlaceholder>
                <PosterPlaceholderSvg />
              </PosterPlaceholder>
            )}

            <HeaderContainer>
              <Title>{movie.title}</Title>
              <Year>{year}</Year>

              <GenresWrapper>
                {genres.map((genre) => (
                  <Genre key={genre}>{genre}</Genre>
                ))}
              </GenresWrapper>

              <RatingContainer>
                <Star />
                <Rate>
                  {movie.vote_average.toLocaleString("pl-PL", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  })}
                </Rate>
                <Votes>{movie.vote_count}</Votes>
              </RatingContainer>
            </HeaderContainer>
          </MovieTile>
        );
      })}
    </>
  );
};
