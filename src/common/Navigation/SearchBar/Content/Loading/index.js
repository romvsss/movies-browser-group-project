import { StyledSpinner, Wrapper, LoadingHeader } from "./styled";

export const Loading = () => (
    <Wrapper>
       <LoadingHeader> Search results for "Mulan"</LoadingHeader>
        <StyledSpinner />
    </Wrapper>
);

export default Loading;