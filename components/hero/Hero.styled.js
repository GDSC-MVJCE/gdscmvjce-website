import { styled } from "styled-components";

export const HeroSectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  overflow: hidden;

  @media (max-width: 768px) {
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
    @media (max-width: 768px) {
      align-items: flex-start;
      margin-left: 10%;
      flex-direction: column;
    }
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
