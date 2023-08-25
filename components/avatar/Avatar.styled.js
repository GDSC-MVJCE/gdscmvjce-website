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
        width: 150px;
        height: 150px;
      `) ||
    (size === "xxl" &&
      css`
        width: 232px;
        height: 232px;
      `)}
  ${({ blur }) =>
    blur
      ? css`
          border-style: solid;
          border-width: ${({ borderWidth }) =>
            borderWidth ? borderWidth : "2px"};
          border-color: ${({ borderColor, theme }) =>
            borderColor ? borderColor : theme.colors.bgPrimary};
          box-shadow: ${({ borderColor, theme }) =>
            borderColor
              ? `0px 0px 20px 4px ${borderColor + 99}`
              : `0px 0px 20px 4px ${theme.colors.bgPrimary}`};
        `
      : css`
          border-width: ${({ borderWidth }) =>
            borderWidth ? borderWidth : "3px"};
          border-color: ${({ borderColor, theme }) =>
            borderColor ? borderColor : theme.colors.bgPrimary};
          border-style: solid;
        `}

  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  object-fit: cover;
`;
