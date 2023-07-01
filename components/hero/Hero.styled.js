import { styled } from 'styled-components';

export const HeroSectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  height: 200vh;
  width: 100%;
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
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeroTextSpan = styled.span`
  font-size: 70px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.contentPrimary};
  transition: font-size 0.5s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    font-size: 86px;
    color: ${({ color }) => (color ? color : '#FFF06C')};
  }
`;

export const HeroBackgroundContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
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
  }
`;

export const HeroBackgroundTextSpan = styled.span`
  font-size: 30px;
  font-weight: 400;
  width: 100%;
  z-index: -1;
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  transition: top 5s ease-in-out, left 5s ease-in-out, font-size 0.4s ease-in-out;
  ${({ isHighlighted }) =>
    isHighlighted &&
    `
    font-size: 36px;
  `}} 
`;
