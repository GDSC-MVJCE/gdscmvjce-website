import { devices } from "@/constants/theme";
import styled from "styled-components";

export const EventContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3em 5em;
  display: flex;
  flex-direction: column;
  gap: 3em;

  @media screen and (${devices.xl}) {
    padding: 3em 2em;
  }

  @media screen and (${devices.sm}) {
    padding: 3em 1em;
  }
`;

export const Banner = styled.div`
  aspect-ratio: 2560/650;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const EventWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3em;
  justify-content: center;
  display: flex;

  @media screen and (${devices.lg}) {
    flex-direction: column;
    gap: 2em;
  }

  @media screen and (${devices.sm}) {
    padding: 0 0.5em;
  }
`;

export const Left = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.5em;

  @media screen and (${devices.lg}) {
    width: 100%;
  }

  @media screen and (${devices.lg}) {
    gap: 1.2em;
  }
`;

export const Right = styled.div`
  width: 40%;
  display: flex;
  justify-content: right;

  @media screen and (${devices.lg}) {
    width: 100%;
    justify-content: center;
  }
`;

export const EventInfo = styled.div`
  margin-top: 1.4em;
`;

export const ContentContainer = styled.div``;

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const ScheduleCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  gap: 0.4em;
  padding: 1em 1em;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const ScheduleCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const ScheduleDate = styled.div`
  display: flex;
  gap: 1em;
`;

export const ScheduleCardColorWrapper = styled.div`
  width: 100%;
  padding-bottom: 0.3em;
  border-radius: 10px;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.colors.brandRed},30%,${theme.colors.brandBlue} 25%,65%,${theme.colors.brandGreen} 65%, 80% ${theme.colors.brandYellow} 75%)`};
  background-size: 350% 350%;
  animation: Gradient 5s ease-in-out infinite;
  -webkit-animation: Gradient 5s ease-in-out infinite;
  -moz-animation: Gradient 5s ease-in-out infinite;

  &:hover {
    animation-duration: 3s;
    -webkit-animation-duration: 3s;
    -moz-animation-duration: 3s;
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const SpeakersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const SpeakersCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: 100%;
`;

export const SpeakerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  padding: 2em;
  gap: 1em;
  box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(90px);

  &:hover {
    box-shadow: 0px 0px 44px -2px rgba(0, 0, 0, 0.16);
    translate: 2px -2px;
  }
`;

export const SpeakerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  width: 100%;

  @media screen and (${devices.sm}) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const SpeakerRole = styled.div``;

export const SpeakerName = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media screen and (${devices.sm}) {
    align-items: center;
    text-align: center;
  }
`;

export const InfoModal = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 10px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1em;
  box-shadow: 0px 4px 44px -2px rgba(0, 0, 0, 0.16);
  padding: 3em;
  position: sticky;
  top: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(90px);

  @media screen and (${devices.lg}) {
    width: 100%;
    justify-content: center;
    padding: 2em 3em;
    position: static;
  }
`;

export const InfoModalDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoModalVenue = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoModalRegistration = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.7em 0.7em;
  font-weight: 500;
  font-size: 1.5rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.brandBlue};
  letter-spacing: 1px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0 0 5px #3b83f65f;
  }

  @media screen and (${devices.md}) {
    font-size: 1.2rem;
  }
`;

export const EventTagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const EventTag = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.contentSecondary};
  border-radius: 5px;
  padding: 0.5em 1em;
`;
