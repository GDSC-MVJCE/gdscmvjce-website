import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const ContentSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .docs-text {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 1.3rem;
    font-weight: 500;
  }

  @media screen and (${devices.lg}) {
    .docs-text {
      width: 85%;
      font-weight: 400;
      font-size: 1.1rem;
    }
  }
`;
