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
      <h1>{movie.title}</h1>
      <>COMING SOON</>
    </div>
  );
};
