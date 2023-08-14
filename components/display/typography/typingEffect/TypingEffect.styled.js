import { styled } from 'styled-components';

export const TypingCursor = styled.span`
  animation: blinkCursor 1s infinite;

  @keyframes blinkCursor {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;
