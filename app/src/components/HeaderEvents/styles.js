import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-negative);
  width: 100vw;
  height: var(--height);
  text-align: center;
  box-shadow: 0 4px 2px var(--color-negative-dark);
`;

export const Title = styled.h1`
  color: var(--color-zero);
  line-height: var(--height);
`;
