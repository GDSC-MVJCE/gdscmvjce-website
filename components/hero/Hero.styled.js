import { devices } from "@/constants/theme";
import { motion } from "framer-motion";
import { styled, keyframes } from "styled-components";

export const HeroSectionContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (${devices.lg}) {
    z-index: -1;
    margin-top: -10%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  overflow: hidden;
  position: relative;

  @media (${devices.lg}) {
    width: 200px;
    height: 200px;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroTextSpan = styled.span`
  font-size: 90px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.contentPrimary};
  transition: font-size 0.5s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    font-size: 100px;
    color: ${({ color }) => (color ? color : "#FFF06C")};
  }
  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

const gradientAnimation = keyframes`
    0% {
        background-position: 0% 100%;
    }
    100% {
        background-position: 100% 0%;
    }
`;

export const HeroBackgroundContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  z-index: -2;
  position: relative;
  .mainText {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    @media (${devices.lg}) {
      align-items: flex-start;
      margin-left: 10%;
      margin-top: -10%;
      flex-direction: column;
    }
  }
  .animated-1 {
    background: rgb(234, 67, 53);
    background: linear-gradient(
      45deg,
      rgba(234, 67, 53, 1) 0%,
      rgba(234, 65, 53, 1) 100%
    );
    background-clip: text;
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientAnimation} 2s linear infinite alternate;
  }
  .animated-2 {
    background: rgb(66, 133, 244);
    background: linear-gradient(
      45deg,
      rgba(66, 133, 244, 1) 0%,
      rgba(66, 108, 244, 1) 100%
    );
    background-clip: text;
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientAnimation} 2s linear infinite alternate;
  }
  .animated-3 {
    background: rgb(52, 168, 83);
    background: linear-gradient(
      45deg,
      rgba(52, 168, 83, 1) 0%,
      rgba(52, 168, 96, 1) 100%
    );
    background-clip: text;
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientAnimation} 2s linear infinite alternate;
  }
`;

const move = keyframes`
0%, 100% {
  transform: translateY(0) translateX(0);
}
50% {
  transform: translateY(-20px) translateX(20px);
}
75% {
  transform: translateY(-10px) translateX(-10px);
}
25% {
  transform: translateY(10px) translateX(10px);
}
`;

export const HeroBackgroundTextSpan = styled.div`
  font-size: 26px;
  font-weight: 400;
  z-index: -1;
  padding: 5px 5px;
  position: absolute;
  color: ${({ color }) => (color ? color : "#FFF06C")};
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  transition: top 5s ease-in-out, left 5s ease-in-out, scale 0.4s ease-in-out;
  ${({ isHighlighted }) =>
    isHighlighted &&
    `
    scale: 1.2;
  `}

  animation: ${move} 5s ${({ delay }) => delay}s ease-in-out infinite;
  @media screen and (${devices.lg}) {
    font-size: 20px;
  }
`;

export const HeroAvatarWrapper = styled.div`
  font-size: 26px;
  font-weight: 400;
  z-index: -1;
  padding: 5px 5px;
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  transition: top 5s ease-in-out, left 5s ease-in-out, scale 0.4s ease-in-out;
  ${({ isHighlighted }) =>
    isHighlighted &&
    `
    scale: 1.2;
  `}
  animation: ${move} 5s ${({ delay }) => delay}s ease-in-out infinite;
`;

export const MouseContainer = styled.div`
  width: 35px;
  height: 64px;
  border-radius: 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.contentSecondary};
  display: flex;
  justify-content: center;
  padding: 10px;
  position: absolute;
  top: 110%;
`;

export const MouseScroll = styled(motion.div)`
  width: 10px;
  height: 10px;
  display: flex;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.contentSecondary};
`;
