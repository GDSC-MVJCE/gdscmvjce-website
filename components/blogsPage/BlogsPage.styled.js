import { motion } from "framer-motion";
import styled from "styled-components";

import { devices } from "@/constants/theme";
import Typography from "../display/typography/Typography";

export const BlogsPageContainer = styled.main`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 1em 5em;
  gap: 1em;

  @media screen and (${devices.xl}) {
    padding: 1em 1em;
    gap: 0.5em;
  }

  @media screen and (${devices.lg}) {
    padding: 1em 0;
    gap: 0.5em;
  }
`;

export const BlogsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 1em;

  @media screen and (${devices.lg}) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: hidden;

  @media screen and (${devices.lg}) {
    width: 70%;
  }

  @media screen and (${devices.sm}) {
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  max-height: calc(100vh - 220px);
  gap: 1.5em;
  position: sticky;
  top: 20px;
  right: 0;
  overflow-y: auto;
  z-index: 10;
  transition: all 0.2s ease-in-out;

  @media screen and (${devices.lg}) {
    background-color: ${({ theme, isVisible }) =>
      isVisible ? theme.colors.bgPrimary : "transparent"};
    width: 100%;
    top: 0;
    padding: 1em 1em 0 1em;
  }
`;

export const BlogTitle = styled(Typography)`
  transition: all 0.2s ease-in-out;
`;

export const BlogsCard = styled(motion.article)`
  display: flex;
  width: 100%;
  height: 280px;
  box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  margin-bottom: 1.5em;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out, color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(90px);

  &:hover {
    box-shadow: 0px 0px 44px -2px rgba(0, 0, 0, 0.16);
    transform: scale(1.01);
  }

  &:hover ${BlogTitle} {
    color: ${({ theme }) => theme.colors.brandRed};
  }

  @media screen and (${devices.lg}) {
    flex-direction: column;
    height: 100%;
    min-height: 280px;
  }
`;

export const BlogsFilterTitle = styled.div`
  width: 100%;
  padding-left: 1em;
  z-index: 11;
`;

export const ImageContainer = styled(motion.div)`
  aspect-ratio: 1/1;
  width: 30%;
  min-width: 200px;
  height: 100%;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 10px 0 0 10px;
  object-fit: cover;

  @media screen and (${devices.xl}) {
    width: 40%;
  }

  @media screen and (${devices.lg}) {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;

export const BlogInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2em;
  margin: 2.3em 1.3em;
  padding: 0;
  overflow: hidden;

  @media screen and (${devices.xl}) {
    gap: 0.5em;
    margin: 0;
    padding: 1.5em 1.3em;
    width: 60%;
  }

  @media screen and (${devices.lg}) {
    width: 100%;
  }
`;

export const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FilterContainer = styled.aside`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  max-height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding-right: 1em;
  overflow-y: auto;

  @media screen and (${devices.lg}) {
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: 1em;
  }
`;

export const FilterCard = styled(motion.div)`
  width: 100%;
  height: fit-content;
  padding: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgTertiary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.contentPrimary};

  &:hover {
    color: ${({ theme }) => theme.colors.brandYellow};
  }

  @media screen and (${devices.lg}) {
    border: 1px solid ${({ borderColor }) => borderColor};
    border-radius: 10px;
    padding: 0.5em 1em;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(90px);
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  justify-content: space-between;
  padding-top: 0.2em;
`;
