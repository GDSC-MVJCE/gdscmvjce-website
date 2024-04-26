import { devices } from "@/constants/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
  height: 100%;
  padding: 2em 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (${devices.lg}) {
    padding-inline: 2em;
  }

  @media screen and (${devices.sm}) {
    padding-inline: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
`;

export const OffersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  justify-content: center;

  @media screen and (${devices.md}) {
    align-items: center;
  }
`;

export const OfferLogo = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  background-image: ${({ bgcolor }) =>
    `linear-gradient(120deg, ${bgcolor[0]} 0%, ${bgcolor[1]} 100%)`};
  border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  animation: morph 3s ${({ delay }) => `${delay}ms`} linear infinite;
  transform-style: preserve-3d;
  outline: 1px solid transparent;
  will-change: border-radius;

  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    box-shadow: 5px 5px 89px ${({ rgb }) => `rgba(${rgb}, 0.21)`};
    will-change: border-radius, transform, opacity;
    animation-delay: ${({ delay }) => `${delay}ms`};
    background-image: ${({ rgb }) => ` linear-gradient(
      120deg,
      rgba(${rgb}, 0.4) 0%,
      rgba(${rgb}, 0.3) 100%
    )`};
  }

  &:before {
    animation: morph 3s linear infinite;
    opacity: 0.21;
    animation-duration: 1.5s;
  }

  &:after {
    animation: morph 3s linear infinite;
    animation-delay: 400ms;
    opacity: 0.89;
    line-height: 120px;
  }

  @media screen and (${devices.sm}) {
    width: 110px;
    height: 110px;
    padding: 2em;
  }

  @keyframes morph {
    0%,
    100% {
      border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    34% {
      border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
      transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
    }
    50% {
      opacity: 0.89;
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    67% {
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
      transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
    }
  }

  @keyframes fadeIn {
    100% {
      transform: scale(1.03);
      opacity: 0;
    }
  }
`;

export const OfferCard = styled.div`
  display: flex;
  width: 80%;
  gap: 3em;
  align-items: center;
  margin-block: 2.5em;

  @media screen and (${devices.md}) {
    gap: 2em;
    justify-content: center;
  }
`;

export const OfferInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 0.5em;

  @media screen and (${devices.md}) {
    width: 70%;
  }

  @media screen and (${devices.sm}) {
    width: 50%;
  }
`;
