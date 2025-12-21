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

export const MovieTileSection = ({ movie }) => (
<MovieTile>
            <Poster>
              {movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt={movie.title}
                ></img>
              ) : (
                <NoMovieIcon />
              )}
            </Poster>
                
        
    <MobileOnly>
        
        <Title>{movie.title}</Title>
        <Year>{movie.release_date?.slice(0, 4)}</Year>
               
        <DataTile>
            <MovieData>Production:</MovieData>
                <Data>
                    {movie.production_countries?.map(c => c.name).join(",")}
                </Data>
        </DataTile>
        <DataTile>
            <MovieData>Release date:</MovieData>
                <Data>
                    {movie.release_date &&
                           new Date(movie.release_date).toLocaleDateString("pl-PL")}
                </Data>
        </DataTile>
                
        <Tags>
            {movie.genres?.map(genre => (
                <Tag key={genre.id}>{genre.name}</Tag>
            ))} 
        </Tags>
                  
        <RatingContent>
            <Rating>
                <Star />
                 {movie.vote_average.toLocaleString("pl-PL", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                })}
            </Rating>
            <DataMobileOnly>
                /10 
            </DataMobileOnly>
            <Votes>
                {movie.vote_count} votes
            </Votes>
        </RatingContent>
    </MobileOnly>
                   
        <Story>{movie.overview}</Story>                  
</MovieTile>
);

export default MovieTileSection;