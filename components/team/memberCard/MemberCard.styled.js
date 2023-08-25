import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const MemberCardContainer = styled.div`
  min-width: 150px;
  min-height: 230px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  max-width: 200px;
  @media screen and (${devices.xl}) {
    max-width: 150px;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.3s;
  }
`;

export const MemberDetailsContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  white-space: normal;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
