import { styled } from "styled-components";
import { devices, mobileTypography, typography } from "@/constants/theme";

export const TypographyWrapper = styled.span`
  font-style: normal;
  background-color: inherit;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;

  color: ${({ color, theme, subdued }) =>
    subdued
      ? theme.colors.contentSecondary
      : (color === "error" && theme.colors.brandRed) ||
        (color === "success" && theme.colors.brandGreen) ||
        color ||
        theme.colors.contentPrimary};

  ${({ variant }) => {
    switch (variant) {
      case "h1":
        return typography.h1;
      case "h2":
        return typography.h2;
      case "h3":
        return typography.h3;
      case "h4":
        return typography.h4;
      case "h5":
        return typography.h5;
      case "h6":
        return typography.h6;
      case "body":
        return typography.body;
      case "bodyEmphasized":
        return typography.bodyEmphasized;
      case "bodySmall":
        return typography.bodySmall;
      case "bodySmallEmphasized":
        return typography.bodySmallEmphasized;
      case "displayLarge":
        return typography.displayLarge;
      case "caption":
        return typography.caption;
      default:
        return `
                font-weight: 400;
                font-size: 18px;
                line-height: 25px;
                `;
    }
  }}

  @media screen and (${devices.md}) {
    ${({ variant }) => {
      switch (variant) {
        case "h1":
          return mobileTypography.h1;
        case "h2":
          return mobileTypography.h2;
        case "h3":
          return mobileTypography.h3;
        case "h4":
          return mobileTypography.h4;
        case "h5":
          return mobileTypography.h5;
        case "h6":
          return mobileTypography.h6;
        case "body":
          return mobileTypography.body;
        case "bodyEmphasized":
          return mobileTypography.bodyEmphasized;
        case "bodySmall":
          return mobileTypography.bodySmall;
        case "bodySmallEmphasized":
          return mobileTypography.bodySmallEmphasized;
        case "displayLarge":
          return mobileTypography.displayLarge;
        case "caption":
          return mobileTypography.caption;
        default:
          return `
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 25px;
                    `;
      }
    }}
  }
`;
