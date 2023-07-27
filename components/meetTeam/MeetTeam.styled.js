import { styled } from "styled-components";

export const MainContainer = styled.div`
  height: 50vh;
  padding: 0 12em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const RightContainer = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  padding: 2em 2em;
  justify-content: center;
  align-items: start;
  gap: 1em;
`;

export const MeetButton = styled.button`
  height: 54px;
  width: 196px;
  border-radius: 16px;
  font-size: 20px;
  background-color: #d4e3ff;
  border: 2px solid #4285f4;
  font-weight: 600;
  cursor: pointer;
`;
