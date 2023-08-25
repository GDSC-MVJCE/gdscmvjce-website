import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const MainContainer = styled.section`
  height: 70vh;
  padding: 0 12em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${devices.lg}) {
    padding: 0 4em;
  }

  @media screen and (${devices.md}) {
    flex-direction: column;
    gap: 2em;
  }

  @media screen and (${devices.md}) {
    padding: 0 1em;
    height: 50vh;
    margin-top: 3em;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .first {
    z-index: 3;
    margin-right: -28px;
  }
  .second {
    z-index: 2;
  }
  .third {
    z-index: 1;
    margin-left: -28px;
  }

  @media screen and (${devices.md}) {
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2em 2em;
  justify-content: center;
  align-items: start;
  gap: 1em;

  @media screen and (${devices.md}) {
    align-items: center;
    text-align: center;
    padding: 0 2em;
    width: 100%;
  }
`;

export const MeetButton = styled.div`
  background: ${({ theme }) => theme.colors.brandYellow + 90};
  border: 2px solid ${({ theme }) => theme.colors.brandYellow};
  color: white;
  padding: 0.8em 2.5em;
  cursor: pointer;
  font-size: 1.2em;
  text-align: center;
  border-radius: 8px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: ${({ theme }) => theme.colors.brandYellow};
    border-radius: 50%;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
    color: #ffffff;
    border: 2px solid ${({ theme }) => theme.colors.brandYellow};
  }

  &:hover:before {
    top: -35%;
    background-color: ${({ theme }) => theme.colors.brandYellow};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: ${({ theme }) => theme.colors.brandYellow};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  @media screen and (${devices.md}) {
    font-size: 1rem;
  }
`;
