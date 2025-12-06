import { StyledButton, CenterWrapper } from "./styled";

export const Buttons = () => {
  return (
    <CenterWrapper>
      <StyledButton className="active"> {/*class added for styles preview*/}
        MOVIES
      </StyledButton>
      <StyledButton>PEOPLE</StyledButton>
    </CenterWrapper>
  );
};
