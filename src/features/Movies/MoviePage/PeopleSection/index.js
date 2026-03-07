import {
  PeopleSection,
  Header,
  TileSection,
  Tile,
  TileImage,
  Person,
  TileName,
  TileRole,
  PersonTile,
} from "./styled";
import { IMAGE_BASE_URL } from "../../../../core/api"

export const Cast = ({ credits }) => {
  if (!credits) return null;

  return (
    <PeopleSection>
      {/* Cast */}
      {credits.cast?.length > 0 && (
        <>
          <Header>Cast ({credits?.cast?.length})</Header>
          <TileSection>
            {credits.cast.slice(0, 10).map((person) => (
              <Tile to={`/people/${person.id}`} key={person.id}>
                <TileImage>
                  {person.profile_path ? (
                    <img
                      src={`${IMAGE_BASE_URL}w185${person.profile_path}`}
                      alt={person.name}
                    />
                  ) : (
                    <Person />
                  )}
                </TileImage>
                <PersonTile>
                  <TileName>{person.name}</TileName>
                  <TileRole>{person.character}</TileRole>
                </PersonTile>
              </Tile>
            ))}
          </TileSection>
        </>
      )}

      {/* Crew */}
      {credits.crew?.length > 0 && (
        <>
          <Header>Crew ({credits?.crew?.length})</Header>
          <TileSection>
            {credits.crew.slice(0, 10).map((person) => (
              <Tile to={`/people/${person.id}`} key={person.id}>
                <TileImage>
                  {person.profile_path ? (
                    <img
                      src={`${IMAGE_BASE_URL}w185${person.profile_path}`}
                      alt={person.name}
                    />
                  ) : (
                    <Person />
                  )}
                </TileImage>
                <PersonTile>
                  <TileName>{person.name}</TileName>
                  <TileRole>{person.job}</TileRole>
                </PersonTile>
              </Tile>
            ))}
          </TileSection>
        </>
      )}
    </PeopleSection>
  );
};

export default Cast;
