import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const MLIntroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  object-fit: cover;
  height: 100%;
  position: relative;
`;

export const ScreenContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  width: 30%;
  object-fit: cover;
  height: 75%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .time {
    font-size: 3.5rem;
    font-weight: 700;
  }
  @media screen and (${devices.lg}) {
    width: 70%;
  }
`;

export const LogosWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 30%;
`;
