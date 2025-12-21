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

export const Cast = ({ credits }) => {
  if (!credits) return null;
  
  return (
                <PeopleSection>
                      <Header>Cast</Header>
                            <TileSection>
                              {credits.cast.slice(0, 10).map(person => (
                                <Tile key={person.id}>
                                  <TileImage>
                                    {person.profile_path ? (
                                      <img
                                        src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
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
                      <Header>Crew</Header>
                            <TileSection>
                              <Tile>
                                <TileImage><Person /></TileImage>
                                <TileName></TileName>
                                <TileRole></TileRole>
                              </Tile>
                            </TileSection>
                </PeopleSection>
)};

export default Cast;