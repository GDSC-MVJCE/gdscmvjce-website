import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const TeamPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 10%;
  gap: 2em;

  @media screen and (${devices.xl}) {
    padding: 2em 0.5em;
    gap: 1em;
  }
`;

export const LeadContainer = styled.div`
  width: fit-content;
`;

export const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.6em;
  @media screen and (${devices.xl}) {
    align-items: center;
  }
`;
export const TeamMembersWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1em;
  @media screen and (${devices.xl}) {
    align-items: center;
    justify-content: center;
  }
`;
