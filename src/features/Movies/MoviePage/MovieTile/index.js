import {
  MovieTile,
  Poster,
  MobileOnly,
  Title,
  Year,
  DataTile,
  Data,
  MovieData,
  Tags,
  Tag,
  RatingContent,
  Rating,
  DataMobileOnly,
  Votes,
  Story,
  Star,
  NoMovieIcon,
} from "./styled";
import { IMAGE_BASE_URL } from "../../../../core/api";

export const MovieTileSection = ({ movie }) => {
  const genres = movie.genres?.filter(Boolean) || [];

  return (
    <MovieTile>
      <Poster>
        {movie.poster_path ? (
          <img
            src={`${IMAGE_BASE_URL}w342${movie.poster_path}`}
            alt={movie.title}
          ></img>
        ) : (
          <NoMovieIcon />
        )}
      </Poster>

      <MobileOnly>
        <Title>{movie.title}</Title>
        <Year>{movie.release_date?.slice(0, 4)}</Year>

        {movie.production_countries?.length > 0 && (
          <DataTile>
            <MovieData>Production:</MovieData>
            <Data>
              {movie.production_countries.map((c) => c.name).join(", ")}
            </Data>
          </DataTile>
        )}

        {movie.release_date && (
          <DataTile>
            <MovieData>Release date:</MovieData>
            <Data>
              {new Date(movie.release_date).toLocaleDateString("pl-PL")}
            </Data>
          </DataTile>
        )}

        {genres.length > 0 && (
          <Tags>
            {genres.map((genre) => (
              <Tag key={genre.id}>{genre.name}</Tag>
            ))}
          </Tags>
        )}

        <RatingContent>
          {movie.vote_count > 0 ? (
            <>
              <Rating>
                <Star />
                {movie.vote_average.toLocaleString("pl-PL", {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
              </Rating>
              <DataMobileOnly>/10</DataMobileOnly>
              <Votes>{movie.vote_count} votes</Votes>
            </>
          ) : (
            <Votes style={{ justifyContent: "center" }}>No votes yet</Votes>
          )}
        </RatingContent>
      </MobileOnly>

      <Story>{movie.overview}</Story>
    </MovieTile>
  );
};

export default MovieTileSection;
