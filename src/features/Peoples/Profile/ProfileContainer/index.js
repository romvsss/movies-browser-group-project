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

export const ProfileContainer = ({ person }) => (
<Container>
    <ActorImage>{person.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                  alt={person.name}
                />
              ) : (
                <Person />
              )}   
    </ActorImage>
    <Description>
        <Name>{person.name}</Name>
        <DataTile>
                    <ActorData></ActorData>
                        <Data>{person.birthday}</Data>
        </DataTile>
        <DataTile>
                    <ActorData2></ActorData2>
                        <Data>{person.place_of_birth}</Data>
        </DataTile>       
    </Description>
        <Story>
            {person.biography || "Biography not available."}
        </Story>
 </Container>
);

export default ProfileContainer;