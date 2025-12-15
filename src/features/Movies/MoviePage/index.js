import { Wrapper, MovieDetails } from "./styled";
import MovieSection from "./Container";
import MovieTileSection from "./MovieTile";
import Cast from "./PeopleSection";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMovieList } from "../movieSlice";

export const MoviePage = () => {
  const { id } = useParams();
  const movies = useSelector(selectMovieList);
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) return <p>Film nie znaleziony</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Wrapper>
            <MovieSection />
            <MovieDetails>
                <MovieTileSection />
                <Cast />
            </MovieDetails>
        </Wrapper>
    </div>
  );
};

export default MoviePage;