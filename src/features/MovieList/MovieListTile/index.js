import {
  MovieTile,
  Poster,
  HeaderContainer,
  Title,
  Year,
  GenreButtons,
  GenreButton,
  RatingContainer,
  Star,
  Rate,
  Votes,
} from "./styled";
import poster from "./poster.png";

export const MovieListTile = () => (
  // Tile data and images will be fetched from the API
  <MovieTile>
    <Poster src={poster} alt="Poster" />

    <HeaderContainer>
      <Title>Mulan</Title>
      <Year>2020</Year>
    </HeaderContainer>

    <GenreButtons>
      <GenreButton>Action</GenreButton>
      <GenreButton>Adventure</GenreButton>
      <GenreButton>Drama</GenreButton>
    </GenreButtons>

    <RatingContainer>
      <Star />
      <Rate>7,8</Rate>
      <Votes>35 votes</Votes>
    </RatingContainer>
  </MovieTile>
);
