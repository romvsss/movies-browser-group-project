import {
  Wrapper,
  PersonSection,
  Header,
  TileSection,
  Tile,
  TileImage,
  MovieTile,
  Title,
  Year,
  Tags,
  Tag,
  RatingContent,
  Rating,
  Star,
  Camera,
} from "./styled";
import { IMAGE_BASE_URL } from "../../../../core/api";

export const ProfileMovies = ({ credits, genresMap }) => (
  <Wrapper>
    <PersonSection>
      {credits?.cast?.length > 0 && (
        <>
          <Header>Movies - cast ({credits.cast.length})</Header>
          <TileSection>
            {credits.cast.map((movie) => {
              const genres =
                movie.genre_ids?.map((id) => genresMap?.[id]).filter(Boolean) ||
                [];

              return (
                <Tile key={movie.id} to={`/movies/${movie.id}`}>
                  <TileImage>
                    {movie.poster_path ? (
                      <img
                        src={`${IMAGE_BASE_URL}w185${movie.poster_path}`}
                        alt={movie.title}
                      />
                    ) : (
                      <div>
                        <Camera />
                      </div>
                    )}
                  </TileImage>
                  <MovieTile>
                    <Title>{movie.title}</Title>

                    <Year>
                      {movie.release_date
                        ? new Date(movie.release_date).getFullYear()
                        : "Unknown year"}
                    </Year>

                    {genres.length > 0 && (
                      <Tags>
                        {genres.map((genre) => (
                          <Tag key={genre}>{genre}</Tag>
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
                          <span>
                            {movie.vote_count}{" "}
                            {movie.vote_count === 1 ? "vote" : "votes"}
                          </span>
                        </>
                      ) : (
                        <span>No votes yet</span>
                      )}
                    </RatingContent>
                  </MovieTile>
                </Tile>
              );
            })}
          </TileSection>
        </>
      )}

      {credits?.crew?.length > 0 && (
        <>
          <Header>Movies - crew ({credits.crew.length})</Header>
          <TileSection>
            {credits.crew.map((movie) => {
              const genres =
                movie.genre_ids?.map((id) => genresMap?.[id]).filter(Boolean) ||
                [];

              return (
                <Tile key={movie.id} to={`/movies/${movie.id}`}>
                  <TileImage>
                    {movie.poster_path ? (
                      <img
                        src={`${IMAGE_BASE_URL}w185${movie.poster_path}`}
                        alt={movie.title}
                      />
                    ) : (
                      <div>
                        <Camera />
                      </div>
                    )}
                  </TileImage>
                  <MovieTile>
                    <Title>{movie.title}</Title>

                    <Year>
                      {movie.release_date
                        ? new Date(movie.release_date).getFullYear()
                        : "Unknown year"}
                    </Year>

                    {genres.length > 0 && (
                      <Tags>
                        {genres.map((genre) => (
                          <Tag key={genre}>{genre}</Tag>
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
                          <span>
                            {movie.vote_count}{" "}
                            {movie.vote_count === 1 ? "vote" : "votes"}
                          </span>
                        </>
                      ) : (
                        <span>No votes yet</span>
                      )}
                    </RatingContent>
                  </MovieTile>
                </Tile>
              );
            })}
          </TileSection>
        </>
      )}
    </PersonSection>
  </Wrapper>
);

export default ProfileMovies;
