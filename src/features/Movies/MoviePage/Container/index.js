import { Container, 
         TitleContainer,
         MovieTitle,
         TitleRating,
         TitleRatingContent,
         Layout,
         Star40px,
         Votes
        } from "./styled";

const posterPath = (patch, size = "w780") => patch ? `https://image.tmdb.org/t/p/${size}${patch}` : null;

export const MovieSection = ({ movie }) => (
<Container poster={posterPath(movie.backdrop_path || movie.poster_path)}>
                
                <TitleContainer>
                    <MovieTitle>{movie.title}</MovieTitle>
                        
                        <TitleRatingContent>
                            <Layout>
                    <TitleRating>
                    <Star40px />
                    {movie.vote_average.toLocaleString("pl-PL", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                   })}
                    </TitleRating>
                             /10
                             </Layout>
                    <Votes>
                    {movie.vote_count} votes
                    </Votes>
                    </TitleRatingContent>
                </TitleContainer>
            </Container >
);

export default MovieSection;