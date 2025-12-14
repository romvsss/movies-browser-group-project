import { Wrapper, MovieDetails } from "./styled";
import MovieSection from "./Container";
import MovieTileSection from "./MovieTile";
import Cast from "./PeopleSection";

export const MoviePage = () => {
    return (
        <Wrapper>
            <MovieSection />
            <MovieDetails>
                <MovieTileSection />
                <Cast />
            </MovieDetails>
        </Wrapper>
    );
};

export default MoviePage;