import {
  Container,
  ActorImage,
  Description,
  Name,
  DataTile,
  ActorData,
  ActorData2,
  Data,
  Story,
  Person,
} from "./styled";
import { IMAGE_BASE_URL } from "../../../../core/api";

export const ProfileContainer = ({ person }) => (
  <Container>
    <ActorImage>
      {person.profile_path ? (
        <img
          src={`${IMAGE_BASE_URL}w342${person.profile_path}`}
          alt={person.name}
        />
      ) : (
        <Person />
      )}
    </ActorImage>
    <Description>
      <Name>{person.name}</Name>

      {person.birthday && (
        <DataTile>
          <ActorData />
          <Data>{new Date(person.birthday).toLocaleDateString("pl-PL")}</Data>
        </DataTile>
      )}

      {person.place_of_birth && (
        <DataTile>
          <ActorData2 />
          <Data>{person.place_of_birth}</Data>
        </DataTile>
      )}
    </Description>
    <Story>{person.biography || "Biography not available."}</Story>
  </Container>
);

export default ProfileContainer;
