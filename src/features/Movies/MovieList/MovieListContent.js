import { SpinnerWrapper, StyledSpinner } from "../../../common/Loading/styled";
import { Error } from "../../../common/Error";
import { NoResults } from "../../../common/NoResults";

export const MovieListContent = ({
  status,
  isNoResults,
  query,
  children,
}) => {
  if (status === "error") {
    return <Error />;
  }

  if (status === "loading") {
    return (
      <SpinnerWrapper>
        <StyledSpinner />
      </SpinnerWrapper>
    );
  }

  if (status === "success" && isNoResults) {
    return <NoResults query={query} />;
  }

  return children;
};