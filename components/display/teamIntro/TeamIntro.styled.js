import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const TeamIntroContainer = styled.div`
  width: 100%;
  height: 100%;
  height: 90vh;
  height: 90dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem 2rem;

  @media screen and (${devices.lg}) {
    height: 100vh;
    padding-bottom: 5em;
    justify-content: flex-start;
    gap: 1rem;
  }
`;

export const TeamIntroSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
  @media screen and (${devices.lg}) {
    gap: 2rem;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const TeamTitlesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 1rem;
  flex-basis: 30%;
  padding: 1rem 0;
  @media screen and (${devices.lg}) {
    flex-basis: unset;
    width: 100%;
    overflow-x: auto;
    max-height: 90px;
    flex-direction: row;
  }
`;

export const TeamDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-basis: 50%;
  height: 70vh;
  width: 100%;
`;

export const TeamButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  width: 100%;
  flex-wrap: nowrap;
  padding: 0.75em 1em;
  color: ${({ theme }) => theme.colors.contentPrimary};
  cursor: pointer;
  background: #fff;
  transition: all 0.2s ease-in-out;
  border: 3px solid #f0f0f0;
  font-size: 28px;
  font-weight: 700;
  border-radius: 12px;
  ${({ isSelected }) =>
    isSelected &&
    `background: #d4e3ff;
    border: 3px solid #4285f4;
    `};

  @media screen and (${devices.lg}) {
    flex-grow: 1;
    font-size: 16px;
    height: fit-content;
    width: max-content;
    flex-direction: row;
  }
`;
