import {
  Wrapper,
  Button,
  ButtonText,
  PageInfo,
  Number,
  Arrow,
} from "./styled";

export const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <Wrapper>
      <Button disabled={page === 1} onClick={() => onPageChange(1)}>
        <Arrow disabled={page === 1} />
        <ButtonText>First</ButtonText>
      </Button>

      <Button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        <Arrow disabled={page === 1} />
        <ButtonText>Previous</ButtonText>
      </Button>

      <PageInfo>
        Page <Number>{page}</Number> of <Number>{totalPages}</Number>
      </PageInfo>

      <Button disabled={page === totalPages} onClick={() => onPageChange(page + 1)}>
        <ButtonText>Next</ButtonText>
        <Arrow rotated="true" disabled={page === totalPages} />
      </Button>

      <Button disabled={page === totalPages} onClick={() => onPageChange(totalPages)}>
        <ButtonText>Last</ButtonText>
        <Arrow rotated="true" disabled={page === totalPages} />
      </Button>
    </Wrapper>
  );
};