import { StyledButton, CenterWrapper } from "./styled";

export const Buttons = () => {
  return (
    <CenterWrapper>
      <StyledButton to="/movies">
        MOVIES
      </StyledButton>
      <StyledButton to="/people">
        PEOPLE
      </StyledButton>
    </CenterWrapper>
  );
};
