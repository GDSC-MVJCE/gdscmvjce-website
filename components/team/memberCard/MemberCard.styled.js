import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const MemberCardContainer = styled.div`
  min-height: 230px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: 200px;
  @media screen and (${devices.xl}) {
    width: 150px;
  }
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }

  .cursor-pointer {
    cursor: url("/cursors/cursor-pointer.svg") 10 0, auto;
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
