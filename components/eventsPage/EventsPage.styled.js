import { motion } from "framer-motion";
import styled from "styled-components";

import { devices } from "@/constants/theme";
import Typography from "../display/typography/Typography";

export const EventsPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 1em 5em;
  gap: 1em;
  height: 100%;
  width: 100%;

  @media screen and (${devices.xl}) {
    padding: 1em 1em;
    gap: 0.5em;
  }
`;

export const EventsContainer = styled.div`
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
  gap: 1.5em;
  position: sticky;
  top: 20px;
  right: 0;
  overflow-y: auto;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  @media screen and (${devices.lg}) {
    width: 100%;
    top: 0;
    padding: 1em 1em 1em 1em;
  }
`;

export const EventTitle = styled(Typography)`
  transition: all 0.2s ease-in-out;
`;

export const EventsCard = styled(motion.article)`
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

  &:hover {
    box-shadow: 0px 0px 44px -2px rgba(0, 0, 0, 0.16);
    transform: scale(1.01);
  }

  &:hover ${EventTitle} {
    color: ${({ theme }) => theme.colors.brandRed};
  }

  @media screen and (${devices.lg}) {
    flex-direction: column;
    height: 100%;
    min-height: 280px;
  }
`;

export const EventsFilterTitle = styled.div`
  width: 100%;
  margin-left: 1em;
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

export const EventInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
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

export const EventTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FilterContainer = styled.aside`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  max-height: 100svh;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding-right: 1em;

  @media screen and (${devices.lg}) {
    flex-direction: row;
  }
`;

export const FilterCard = styled(motion.div)`
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgTertiary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.contentPrimary};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.brandYellow};
  }

  @media screen and (${devices.lg}) {
    border: 1px solid ${({ borderColor }) => borderColor};
    border-radius: 10px;
    padding: 0.5em 1em;
    justify-content: center;
    align-items: center;
  }
`;
