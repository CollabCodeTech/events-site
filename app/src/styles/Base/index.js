import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  body {
    background-color: var(--color-negative);
    font-family: 'Comfortaa', sans-serif;
    padding-top: var(--height);
  }
`;

export default Base;
