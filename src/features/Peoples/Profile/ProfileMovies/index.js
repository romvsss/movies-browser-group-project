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
    Star
} from "./styled";

export const ProfileMovies = ({ credits, genresMap }) =>  (
    <Wrapper>
<PersonSection>
                         <Header>Movies - cast ({credits?.cast?.length || 0})</Header>
                        <TileSection >
                            {credits?.cast?.map((movie) => (
                                <Tile key={movie.credit_id}>
                            <TileImage>
                                {movie.poster_path ? (
                                    <img 
                                    src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                                    alt={movie.title}
                                    />
                                ) : (
                                    <div></div>
                                )}
                            </TileImage>
                                <MovieTile>
                                    <Title>{movie.title}</Title>
                                    <Year>{movie.release_date ? 
                                    new Date(movie.release_date).getFullYear() : "Unknown year"}</Year>
                                    <Tags>
                                         {movie.genre_ids?.map((id) => (
                                          <Tag key={id}>
                                         {genresMap?.[id] || "Unknown"}
                                           </Tag>
                                        ))}
                                    </Tags>   
                                
                                    <RatingContent>
                                        <Rating>
                                            <Star />{movie.vote_average.toFixed(1)}
                                        </Rating>
                                           {movie.vote_count} votes
                                    </RatingContent>   
                                  </MovieTile>                      
                            </Tile> 
                            ))}                           
                        </TileSection>
                    </PersonSection>
                    <PersonSection>
                         <Header>Movies - crew ({credits?.crew?.length || 0})</Header>
                         <TileSection >
                            {credits?.crew?.map((movie) => (
                                <Tile key={movie.credit_id}>
                            <TileImage>
                                {movie.poster_path ? (
                                    <img 
                                    src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                                    alt={movie.title}
                                    />
                                ) : (
                                    <div></div>
                                )}
                            </TileImage>
                                <MovieTile>
                                    <Title>{movie.title}</Title>
                                    <Year>{movie.release_date ? 
                                    new Date(movie.release_date).getFullYear() : "Unknown year"}</Year>
                                    <Tags>
                                         {movie.genre_ids?.map((id) => (
                                          <Tag key={id}>
                                         {genresMap?.[id] || "Unknown"}
                                           </Tag>
                                        ))}
                                    </Tags>   
                                
                                    <RatingContent>
                                        <Rating>
                                            <Star />{movie.vote_average.toFixed(1)}
                                        </Rating>
                                           {movie.vote_count} votes
                                    </RatingContent>   
                                  </MovieTile>                      
                            </Tile> 
                            ))}                           
                        </TileSection>
                    </PersonSection>
</Wrapper>
);

export default ProfileMovies;