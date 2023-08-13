import { styled } from "styled-components";

export const Tag = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.bgTertiary};
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;
