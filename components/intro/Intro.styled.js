import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { devices } from "@/constants/theme";

export const IntroContainer = styled.section`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  min-height: 80dvh;
  display: flex;
  align-items: center;
  padding: 0px 80px;

  @media screen and (${devices.lg}) {
    flex-direction: column-reverse;
    padding: 0px 20px;
  }

  @media screen and (${devices.sm}) {
    padding: 0px 10px;
    margin-bottom: 1em;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 40px;

  @media screen and (${devices.lg}) {
    width: 80%;
  }

  @media screen and (${devices.sm}) {
    width: 100%;
    padding: 1em 0.5em;
  }
`;

export const LeftInnerContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;
  gap: 20px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const RightContainer = styled.div`
  width: 40%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${devices.lg}) {
    width: 90%;
  }

  @media screen and (${devices.sm}) {
    width: 100%;
    height: 450px;
    margin-top: -6em;
  }
`;

export const AvatarContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${devices.lg}) {
    width: 60%;
    height: 80%;
  }

  @media screen and (${devices.sm}) {
    height: 60%;
  }

  @media screen and (max-width: 400px) {
    margin-right: 4em;
  }

  @media screen and (max-width: 350px) {
    margin-right: 5em;
  }
`;

export const move = keyframes`
0%, 100% {
        transform: translateX(0) translateY(0);
    }
    25% {
        transform: translateX(${Math.random() * 10 + 5}px) translateY(${
  Math.random() * 10 + 5
}px);
    }
    50% {
        transform: translateX(${Math.random() * 10 - 5}px) translateY(${
  Math.random() * 10 - 5
}px);
    }
    75% {
        transform: translateX(${Math.random() * 10 - 15}px) translateY(${
  Math.random() * 10 + 15
}px);
    }
`;

export const IntersectingPoint = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 200px;
  left: 180px;
  background-color: "transparent";
  position: absolute;
  animation: ${move} 5s ${({ delay }) => delay}s ease infinite;

  @media screen and (${devices.sm}) {
    top: 170px;
    left: 120px;
  }
`;

export const Span = styled.span`
  color: ${({ color }) => color};
`;

export const ClubName = styled(motion.span)`
  display: block;
  cursor: pointer;
`;
