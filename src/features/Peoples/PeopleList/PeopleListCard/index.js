import {
  Name,
  PeopleTile,
  Photo,
  PhotoPlaceholder,
} from "./styled";
import { ReactComponent as PhotoPlaceholderSvg } from "../../../../images/Profile.svg";

const PHOTO_BASE_URL = "https://image.tmdb.org/t/p/w342"

export const PeopleListCard = ({ person }) => {
  return (
    <PeopleTile>
      {person.profile_path ? (
        <Photo
          src={`${PHOTO_BASE_URL}${person.profile_path}`}
          alt={person.name}
        />
      ) : (
        <PhotoPlaceholder>
          <PhotoPlaceholderSvg />
        </PhotoPlaceholder>
      )}
      
      <Name>{person.name}</Name>
    </PeopleTile>
  );
};
