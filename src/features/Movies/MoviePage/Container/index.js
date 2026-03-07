import {
  Container,
  TitleContainer,
  MovieTitle,
  TitleRating,
  TitleRatingContent,
  Layout,
  Star40px,
  Votes,
  BackgroundPoster,
  PosterImage,
  GradientOverlay,
} from "./styled";
import { IMAGE_BASE_URL } from "../../../../core/api";

const posterPath = (path, size = "original") =>
  path ? `${IMAGE_BASE_URL}${size}${path}` : null;

export const MovieSection = ({ movie }) => {
  const posterUrl = posterPath(movie.backdrop_path || movie.poster_path);

  return (
  <BackgroundPoster>
    <Container>
      <PosterImage src={posterUrl} alt={movie.title} />
      <GradientOverlay />

      <TitleContainer>
        <MovieTitle>{movie.title}</MovieTitle>

        <TitleRatingContent>
          {movie.vote_count === 0 ? (
            <>
              <Votes>No votes yet</Votes>
            </>
          ) : (
            <>
              <Layout>
                <TitleRating>
                  <Star40px />
                  {movie.vote_average.toLocaleString("pl-PL", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  })}
                </TitleRating>
                / 10
              </Layout>
              <Votes>{movie.vote_count} votes</Votes>
            </>
          )}
        </TitleRatingContent>
      </TitleContainer>
    </Container>
  </BackgroundPoster>
  );
};

export default MovieSection;
