import {
    Wrapper,
    PersonSection,
    Header,
    TileSection,
    Tile,
    TileImage,
    MovieTile,
    Title,
    Year,
    Tags,
    Tag, 
    RatingContent,
    Rating,
    Star
} from "./styled";

export const ProfileMovies = ({ credits }) => (
    <Wrapper>
<PersonSection>
                         <Header>Movies - cast (4)</Header>
                        <TileSection>
                            <Tile>
                            <TileImage></TileImage>
                                <MovieTile>
                                    <Title>Mulan long title</Title>
                                    <Year>Zou Yu (2020)</Year>
                                    <Tags>
                                        <Tag>Tag1</Tag>
                                        <Tag>Action</Tag>
                                        <Tag>Adventure</Tag>
                                    </Tags>   
                                
                                    <RatingContent>
                                        <Rating>
                                            <Star />7,8
                                        </Rating>
                                            335 votes
                                    </RatingContent>   
                                  </MovieTile>                      
                            </Tile> 
                             <Tile>
                            <TileImage></TileImage>
                                <MovieTile>
                                    <Title>Mulan long title long title Mulan long title long</Title>
                                    <Year>Zou Yu (2020)</Year>
                                    <Tags>
                                        <Tag>Tag1</Tag>
                                        <Tag>Action</Tag>
                                        <Tag>Adventure</Tag>
                                    </Tags> 
                                          
                                    <RatingContent>
                                        <Rating>
                                            <Star />7,8
                                        </Rating>
                                            335 votes                                      
                                    </RatingContent>    
                                   </MovieTile>                                                  
                            </Tile> 
                             <Tile>
                            <TileImage></TileImage>
                                <MovieTile>
                                    <Title></Title>
                                    <Year></Year>
                                    <Tags>
                                        <Tag>Tag1</Tag>
                                        <Tag>Action</Tag>
                                        <Tag>Adventure</Tag>
                                    </Tags> 
                                          
                                    <RatingContent>
                                        <Rating>
                                            <Star />7,8
                                        </Rating>
                                            335 votes
                                    </RatingContent>  
                                </MovieTile>                         
                            </Tile> 
                             <Tile>
                            <TileImage></TileImage>
                                <MovieTile>
                                    <Title></Title>
                                    <Year></Year>
                                    <Tags>
                                        <Tag>Tag1</Tag>
                                        <Tag>Action</Tag>
                                        <Tag>Adventure</Tag>
                                    </Tags>    
                                        
                                    <RatingContent>
                                        <Rating>
                                            <Star />7,8
                                        </Rating>                                       
                                            335 votes
                                    </RatingContent>
                                </MovieTile> 
                            </Tile> 
                        </TileSection>
                    </PersonSection>
                    <PersonSection>
                         <Header>Movies - crew (4)</Header>
                        <TileSection>
                            <Tile>
                            <TileImage></TileImage>
                                <MovieTile>
                                    <Title></Title>
                                    <Year></Year>
                                    <Tags>
                                        <Tag>Tag1</Tag>
                                        <Tag>Action</Tag>
                                        <Tag>Adventure</Tag>
                                    </Tags>     
                                      
                                    <RatingContent>
                                        <Rating>
                                            <Star />7,8
                                        </Rating>                                   
                                            335 votes
                                    </RatingContent>
                                </MovieTile> 
                            </Tile> 
                        </TileSection>
                    </PersonSection>
</Wrapper>
);

export default ProfileMovies;