import { styled } from 'styled-components';
import { typography } from '@/constants/theme';

export const TypographyWrapper = styled.span`
  font-style: normal;
  background-color: inherit;
  color: ${({ color, theme, subdued }) =>
    subdued
      ? theme.colors.contentSecondary
      : (color === 'error' && theme.colors.utilRed) ||
        (color === 'success' && theme.colors.utilGreen) ||
        color ||
        theme.colors.contentPrimary};

  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return typography.h1;
      case 'h2':
        return typography.h2;
      case 'h3':
        return typography.h3;
      case 'h4':
        return typography.h4;
      case 'h5':
        return typography.h5;
      case 'h6':
        return typography.h6;
      case 'body':
        return typography.body;
      case 'bodyEmphasized':
        return typography.bodyEmphasized;
      case 'bodySmall':
        return typography.bodySmall;
      case 'bodySmallEmphasized':
        return typography.bodySmallEmphasized;
      case 'caption':
        return typography.caption;
      default:
        return `
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 25px;
                    `;
    }
  }}
`;
