import { devices } from "@/constants/theme";
import { styled } from "styled-components";
import Tilt from "react-parallax-tilt";

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
    padding: 2em 1em;
  }
`;

export const EventCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
`;

export const EventCard = styled(Tilt).attrs(() => ({
  tiltMaxAngleX: 8,
  tiltMaxAngleY: 8
}))`
  width: 380px;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.bgTertiary};
  border-radius: 8px;
  padding: 1em;
  text-align: left;
  justify-content: space-between;
  box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.16);
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 1);

  &:hover {
    box-shadow: 0px 0px 44px -2px rgba(0, 0, 0, 0.16);
    transform: scale(1.01);
  }

  @media screen and (${devices.sm}) {
    width: 100%;
    min-height: auto;
  }
`;

export const DateLine = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 1em;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.brandBlue};
  width: 100%;
  height: 100%;
  padding: 0.8em;
  color: white;
  text-align: center;
  border-radius: 8px;
  position: relative;
  transition: all 0.4s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 0 5px #3b83f65f;
  }

  @media screen and (${devices.sm}) {
    margin-top: 1em;
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

export const ExploreButton = styled.button`
  background: ${({ theme }) => theme.colors.bgPrimary};
  border: 2px solid ${({ theme }) => theme.colors.brandBlue};
  color: ${({ theme }) => theme.colors.contentPrimary};
  width: 300px;
  padding: 0.8em;
  text-align: center;
  border-radius: 8px;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    transition: all 0.4s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: ${({ theme }) => theme.colors.brandBlue};
    border-radius: 50%;
    transition: all 0.4s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
    color: #ffffff;
    border: 2px solid ${({ theme }) => theme.colors.brandBlue};
  }

  &:hover:before {
    top: -35%;
    background-color: ${({ theme }) => theme.colors.brandBlue};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: ${({ theme }) => theme.colors.brandBlue};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  @media screen and (${devices.md}) {
    width: 100%;
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
