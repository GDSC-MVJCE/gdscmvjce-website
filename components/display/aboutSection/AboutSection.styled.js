import { devices } from "@/constants/theme";
import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutSectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 40vh;
  min-height: 40dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 80px 0px 80px;
  margin-top: 8em;

  @media screen and (${devices.lg}) {
    flex-direction: column;
    padding: 10px 20px;
    margin-top: 0em;
  }

  @media screen and (${devices.sm}) {
    gap: 0em;
    padding: 0px 20px;
  }
`;

export const LeftContainer = styled.div`
  width: 45%;
  height: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;

  @media screen and (${devices.lg}) {
    width: 90%;
  }

  @media screen and (${devices.sm}) {
    width: 100%;
    height: 200px;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 40px;
  gap: 20px;

  @media screen and (${devices.lg}) {
    width: 80%;
  }

  @media screen and (${devices.sm}) {
    width: 100%;
    padding: 1em 0;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ClubName = styled(motion.span)`
  display: block;
  cursor: pointer;
`;

export const Span = styled.span`
  color: ${({ color }) => color};
`;
