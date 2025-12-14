import { Container, 
         TitleContainer,
         MovieTitle,
         TitleRating,
         TitleRatingContent,
         Layout,
         Star40px,} from "./styled";

export const MovieSection = () => (
<Container>
                <TitleContainer>
                    <MovieTitle>Mulan long title</MovieTitle>
                        <TitleRatingContent>
                            <Layout>
                    <TitleRating>
                    <Star40px />7,8
                    </TitleRating>
                             /10</Layout>
                    335 votes
                    </TitleRatingContent>
                </TitleContainer>
            </Container >
);

export default MovieSection;