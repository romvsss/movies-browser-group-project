import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }) => theme.colors.whisper};
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Poppins', sans-serif;
    word-break: break-word;
  }
`;
