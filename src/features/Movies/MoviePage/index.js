import { Wrapper, MovieDetails } from "./styled";
import MovieSection from "./Container";
import MovieTileSection from "./MovieTile";
import Cast from "./PeopleSection";
import Loading from "../../../common/Loading";
import { Error } from "../../../common/Error/index";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails,
         selectMovieDetails,
         selectMovieCredits,
         selectDetailsStatus
 } from "../movieSlice";

export const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const movie = useSelector(selectMovieDetails);
  const credits = useSelector(selectMovieCredits);
  const status = useSelector(selectDetailsStatus);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  if (status === "loading") return <Loading />;
  if (status === "error") return <Error />;
  if (!movie) return <Error />

  return (
    <div >
      <Wrapper>
            <MovieSection movie={movie}/>
            <MovieDetails>
                <MovieTileSection movie={movie} />
                <Cast credits={credits}/>
            </MovieDetails>
        </Wrapper>
    </div>
  );
};

export default MoviePage;