import ProfileContainer from "./ProfileContainer";
import ProfileMovies from "./ProfileMovies";
import Loading from '../../../common/Loading';
import Error from "../../../common/Error";
import { Wrapper } from "./styled";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersonDetails,
         selectPersonDetails,
         selectPersonCredits,
         selectDetailsStatus 
} from "../peopleSlice";

export const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const person = useSelector(selectPersonDetails);
  const credits = useSelector(selectPersonCredits);
  const status = useSelector(selectDetailsStatus);

  useEffect(() => {
    dispatch(fetchPersonDetails(id));
  }, [dispatch, id]);

  if (status === "loading") return <Loading />;
  if (status === "error") return <Error />;
  if (!person) return null;

  return (
    <Wrapper>
    <ProfileContainer person={person} />
          <ProfileMovies credits={credits} />          
 </Wrapper>
  );
};
