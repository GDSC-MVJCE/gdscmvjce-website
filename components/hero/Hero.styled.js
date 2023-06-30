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
  width: 100%;
  color: ${({ theme }) => theme.colors.contentPrimary};
  margin: 0 10px;
  transition: font-size 0.5s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    font-size: 86px;
    color: ${({ color }) => (color ? color : '#FFF06C')};
  }
`;
