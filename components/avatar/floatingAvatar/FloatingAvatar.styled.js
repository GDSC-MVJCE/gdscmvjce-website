import { move } from "@/components/intro/Intro.styled";
import styled from "styled-components";

export const FloatingAvatarWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  animation: ${move} 5s ${({ delay }) => delay}s ease infinite;
`;
