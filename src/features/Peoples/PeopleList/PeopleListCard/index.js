import {
  Name,
  PeopleTile,
  Photo,
  PhotoPlaceholder,
} from "./styled";
import { ReactComponent as PhotoPlaceholderSvg } from "../../../../images/Profile.svg";
import { IMAGE_BASE_URL } from "../../../../core/api"

export const PeopleListCard = ({ person }) => {
  return (
    <PeopleTile to={`/people/${person.id}`}>
      {person.profile_path ? (
        <Photo
          src={`${IMAGE_BASE_URL}w342${person.profile_path}`}
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
