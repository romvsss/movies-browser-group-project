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
import { IMAGE_BASE_URL } from "../../../../core/api";

export const MovieListCard = ({ movies, genresMap }) => {
  return (
    <>
      {movies.map((movie) => {
        const year = movie.release_date?.slice(0, 4) || "—";

        const genres =
          movie.genre_ids?.map((id) => genresMap?.[id]).filter(Boolean) ?? [];

        return (
          <MovieTile key={movie.id} to={`/movies/${movie.id}`}>
            {movie.poster_path ? (
              <Poster
                src={`${IMAGE_BASE_URL}w300${movie.poster_path}`}
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

              {genres.length > 0 && (
                <GenresWrapper>
                  {genres.map((genre) => (
                    <Genre key={genre}>{genre}</Genre>
                  ))}
                </GenresWrapper>
              )}

              <RatingContainer>
                {movie.vote_count > 0 ? (
                  <>
                    <Star />
                    <Rate>
                      {movie.vote_average.toLocaleString("pl-PL", {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1,
                      })}
                    </Rate>
                    <Votes>
                      {movie.vote_count}{" "}
                      {movie.vote_count === 1 ? "vote" : "votes"}
                    </Votes>
                  </>
                ) : (
                  <Votes>No votes yet</Votes>
                )}
              </RatingContainer>
            </HeaderContainer>
          </MovieTile>
        );
      })}
    </>
  );
};
