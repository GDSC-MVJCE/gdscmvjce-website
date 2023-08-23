import styled, { keyframes } from "styled-components";

export const skChase = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const skChaseDot = keyframes`
  80%, 100% {
    transform: rotate(360deg);
  }
`;

export const skChaseDotBefore = keyframes`
  50% {
    transform: scale(0.4);
  }
  100%, 0% {
    transform: scale(1);
  }
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkChase = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: relative;
  animation: ${skChase} 2.5s infinite linear both;
`;

export const SkChaseDot = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${skChaseDot} 2s infinite ease-in-out both;

  &:before {
    content: "";
    display: block;
    width: 25%;
    height: 25%;
    background-color: ${({ color }) => color};
    border-radius: 100%;
    animation: ${skChaseDotBefore} 2s infinite ease-in-out both;
  }
  &:nth-child(1) {
    animation-delay: -1.1s;
  }
  &:nth-child(2) {
    animation-delay: -1s;
  }
  &:nth-child(3) {
    animation-delay: -0.9s;
  }
  &:nth-child(4) {
    animation-delay: -0.8s;
  }
  &:nth-child(5) {
    animation-delay: -0.7s;
  }
  &:nth-child(6) {
    animation-delay: -0.6s;
  }
  &:nth-child(7) {
    animation-delay: -0.5s;
  }
  &:nth-child(8) {
    animation-delay: -0.4s;
  }

  &:nth-child(1):before {
    animation-delay: -1.1s;
  }
  &:nth-child(2):before {
    animation-delay: -1s;
  }
  &:nth-child(3):before {
    animation-delay: -0.9s;
  }
  &:nth-child(4):before {
    animation-delay: -0.8s;
  }
  &:nth-child(5):before {
    animation-delay: -0.7s;
  }
  &:nth-child(6):before {
    animation-delay: -0.6s;
  }
  &:nth-child(7):before {
    animation-delay: -0.5s;
  }
  &:nth-child(8):before {
    animation-delay: -0.4s;
  }
`;
