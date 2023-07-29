import { css, styled } from "styled-components";

export const AvatarWrapper = styled.div`
  ${({ size }) =>
    (size === "xs" &&
      css`
        width: 32px;
        height: 32px;
      `) ||
    (size === "sm" &&
      css`
        width: 47px;
        height: 47px;
      `) ||
    (size === "md" &&
      css`
        width: 75px;
        height: 75px;
      `) ||
    (size === "lg" &&
      css`
        width: 100px;
        height: 100px;
      `) ||
    (size === "xl" &&
      css`
        width: 232px;
        height: 232px;
      `)};
  border-width: ${({ borderWidth }) => (borderWidth ? borderWidth : "3px")};
  border-color: ${({ borderColor, theme }) =>
    borderColor ? borderColor : theme.colors.bgPrimary};
  background: url(${({ url }) => url}) no-repeat center center;
  background-size: cover;
  border-style: solid;
  border-radius: 50%;
  cursor: pointer;
`;
