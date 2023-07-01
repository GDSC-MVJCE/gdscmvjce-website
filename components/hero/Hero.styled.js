import { styled } from "styled-components";

export const HeroSectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
