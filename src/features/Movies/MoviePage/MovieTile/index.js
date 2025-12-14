import {
         MovieTile, 
         Poster,
         MobileOnly,
         Title,
         Year,
         DataTile,
         Data,
         MovieData,
         Tags,
         Tag,
         RatingContent,
         Rating,
         DataMobileOnly,
         Votes,
         Story,
         Star,
         NoMovieIcon,
} from "./styled";

export const MovieTileSection = () => (
<MovieTile>
            <Poster>
                <NoMovieIcon />
            </Poster>
                
        
    <MobileOnly>
        
        <Title>Tytuł</Title>
        <Year>GetYearFromDate</Year>
               
        <DataTile>
            <MovieData>Production:</MovieData>
                <Data>"."</Data>
            <MovieData>Release date:</MovieData>
                <Data>"."</Data>
        </DataTile>
                
        <Tags>
            <Tag>Tag1</Tag>
            <Tag>Action</Tag>
            <Tag>Adventure</Tag>
        </Tags>
                  
        <RatingContent>
            <Rating>
                <Star />7,8
            </Rating>
            <DataMobileOnly>
                /10 
            </DataMobileOnly>
            <Votes>
                335 votes
            </Votes>
        </RatingContent>
    </MobileOnly>

                   
        <Story>
         A young Chinese maiden disguises herself as a male warrior in order to save her father. <br />
         Disguises herself as a male warrior in order to save her father.  
         A young Chinese maiden disguises herself as a male warrior in order to save her father.
        </Story>
                  
</MovieTile>
);

export default MovieTileSection;