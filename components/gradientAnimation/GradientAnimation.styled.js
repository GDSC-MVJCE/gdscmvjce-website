import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const GradientContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;

  @media screen and (${devices.lg}) {
    display: none;
  }
`;
export const GradientBall = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  opacity: 0.2;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: blur(50px);
  ${({ ballNo, theme }) => {
    switch (ballNo) {
      case 1:
        return `
        background: linear-gradient(
          90deg,
          ${theme.colors.brandYellow} 1%,
          rgba(255, 255, 255, 0) 100%
        );
      `;
      case 2:
        return `
        background: linear-gradient(
          90deg,
          ${theme.colors.brandRed} 1%,
          rgba(255, 255, 255, 0) 100%
        );
      `;
      case 3:
        return `
        background: linear-gradient(
          90deg,
          ${theme.colors.brandGreen} 1%,
          rgba(255, 255, 255, 0) 100%
        );
      `;
      case 4:
        return `
        background: rgb(66,133,244);
        background: radial-gradient(circle, rgba(66,133,244,1) 0%, rgba(255,255,255,0) 100%);
      `;
      default:
        return "";
    }
  }}
`;
