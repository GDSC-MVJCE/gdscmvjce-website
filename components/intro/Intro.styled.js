import styled, { keyframes } from "styled-components";
import Avatar from "../avatar/Avatar";
import { motion } from "framer-motion";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 40px;
`;

export const LeftInnerContainer = styled.div`
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
`;

export const AvatarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const CustomAvatar = styled.div`
  width: 150px;
  height: 150px;
  background: url(${({ url }) => url}) no-repeat center center;
  background-size: cover;
  border-radius: 50%;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  animation: ${move} 5s ${({ delay }) => delay}s ease infinite;
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
`;

export const Span = styled.span`
  color: ${({ color }) => color};
`;

export const ClubName = styled(motion.span)`
  display: block;
  cursor: pointer;
`;
