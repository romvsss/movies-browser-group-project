import {
  Wrapper,
  Button,
  ButtonText,
  PageInfo,
  Number,
  Arrow,
} from "./styled";

const isFirstPage = (page) => page === 1;
const isLastPage = (page, totalPages) => page === totalPages;

export const maxPageSize = 500;

export const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <Wrapper>
      <Button disabled={isFirstPage(page)} onClick={() => onPageChange(1)}>
        <Arrow mobile="true" disabled={isFirstPage(page)} />
        <Arrow disabled={isFirstPage(page)} />
        <ButtonText>First</ButtonText>
      </Button>

      <Button disabled={isFirstPage(page)} onClick={() => onPageChange(page - 1)}>
        <Arrow disabled={isFirstPage(page)} />
        <ButtonText>Previous</ButtonText>
      </Button>

      <PageInfo>
        Page <Number>{page}</Number> of <Number>{totalPages}</Number>
      </PageInfo>

      <Button disabled={isLastPage(page, totalPages)} onClick={() => onPageChange(page + 1)}>
        <ButtonText>Next</ButtonText>
        <Arrow rotated="true" disabled={isLastPage(page, totalPages)} />
      </Button>

      <Button disabled={isLastPage(page, totalPages)} onClick={() => onPageChange(totalPages)}>
        <ButtonText>Last</ButtonText>
        <Arrow rotated="true" disabled={isLastPage(page, totalPages)} />
        <Arrow rotated="true" mobile="true" disabled={isLastPage(page, totalPages)}/>
      </Button>
    </Wrapper>
  );
};