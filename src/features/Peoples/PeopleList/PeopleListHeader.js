import { StyledHeader } from "./styled";

export const PeopleListHeader = ({ query, status, totalResults }) => {
  if (!query) {
    return <StyledHeader>Popular people</StyledHeader>;
  }

  if (status === "success" && totalResults === 0) {
    return (
      <StyledHeader>
        Sorry, there are no results for "{query}"
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      Search results for "{query}"
      {status === "success" && totalResults > 0 && (
        <> ({totalResults})</>
      )}
    </StyledHeader>
  );
};