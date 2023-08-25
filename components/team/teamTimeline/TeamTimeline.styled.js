import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const TeamTimelineContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 2em 0;
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2em;
  }
`;

export const TeamTimelineCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  white-space: normal;
  flex-wrap: wrap;
  padding: 0 0.2em;
`;

export const TeamImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
`;

export const ViewTeamButton = styled.div`
  width: 100%;
  min-width: 200px;
  padding: 15px 20px;
  border-radius: 8px;
  text-align: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.brandBlue};
  color: ${({ theme }) => theme.colors.bgPrimary};
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
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
    background-color: #0a5ce4;
    border-radius: 50%;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
    color: #ffffff;
    border: 1px solid #0a5ce4;
    transform: scale(1.05);
  }

  &:hover:before {
    top: -35%;
    background-color: #0a5ce4;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: #0a5ce4;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  @media screen and (${devices.md}) {
    width: 100%;
    font-size: 1rem;
  }
`;
