import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: 100dvh;
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

export const BlogCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
`;

export const BlogCard = styled.article`
  width: 30%;
  height: 100%;
  min-height: 710px;
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

export const BlogInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  transition: all 0.4s ease;
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
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
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
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
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
`;

export const ImageContainer = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  position: relative;
  margin-bottom: 1em;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  gap: 0.5em;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
