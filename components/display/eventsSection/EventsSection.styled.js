import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100dvh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em 8em;
  text-align: center;
  gap: 20px;

  @media screen and (${devices.lg}) {
    padding: 2em 4em;
  }
`;

export const EventCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
`;

export const EventCard = styled.article`
  width: 30%;
  height: 100%;
  min-height: 670px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.bgTertiary};
  border-radius: 8px;
  padding: 1em;
  text-align: left;
  justify-content: space-between;
  box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.16);
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(90px);

  &:hover {
    box-shadow: 0px 0px 44px -2px rgba(0, 0, 0, 0.16);
    transform: scale(1.01);
  }

  @media screen and (${devices.lg}) {
    width: 300px;
    min-height: 610px;
  }

  @media screen and (${devices.md}) {
    min-height: 550px;
  }
`;

export const DateLine = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 1em;
`;

export const Button = styled.div`
  background: ${({ theme }) => theme.colors.brandBlue};
  width: 100%;
  height: 100%;
  padding: 0.8em;
  color: white;
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  position: relative;
  transition: all 0.4s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 0 5px #3b83f65f;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3em 2.8em;

  @media screen and (${devices.lg}) {
    flex-direction: column;
    padding: 0.3em 0;
  }
`;

export const ExploreButton = styled.div`
  background: ${({ theme }) => theme.colors.bgPrimary};
  border: 2px solid ${({ theme }) => theme.colors.brandBlue};
  color: ${({ theme }) => theme.colors.contentPrimary};
  width: 300px;
  padding: 0.8em;
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  position: relative;
  transition: all 0.4s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 0 5px #3b83f65f;
    color: ${({ theme }) => theme.colors.bgPrimary};
    background-color: ${({ theme }) => theme.colors.brandBlue};
  }
`;

export const ImageContainer = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  position: relative;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
`;
