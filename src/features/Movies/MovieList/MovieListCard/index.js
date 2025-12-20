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

export const MovieListCard = ({ movies, genresMap }) => {
  return (
    <>
      {movies.map((movie) => {
        const year = movie.release_date?.slice(0, 4) || "—";

        const genres = movie.genre_ids
          ?.map((id) => genresMap[id])
          .filter(Boolean);

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
                  {movie.vote_average === 0
                    ? ""
                    : `${movie.vote_average.toLocaleString("pl-PL", {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1,
                      })}`}
                </Rate>
                <Votes>
                  {movie.vote_count === 0
                    ? "No votes yet"
                    : `${movie.vote_count} ${
                        movie.vote_count === 1 ? "vote" : "votes"
                      }`}
                </Votes>
              </RatingContainer>
            </HeaderContainer>
          </MovieTile>
        );
      })}
    </>
  );
};
