import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const TerminalContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  min-width: 300px;
  height: 70%;
  border-radius: 13px;
  background: #171717;
  @media screen and (${devices.lg}) {
    height: 100%;
  }
`;

export const TerminalHeader = styled.div`
  display: flex;
  height: 35px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: 0.5rem 1rem;
  gap: 6px;
  background: #1e1e1e;
  border-radius: 13px 13px 0px 0px;
  background: #363636;
`;

export const TerminalContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  color: #fff;

  .gdsc-text {
    color: #24b06c;
  }
`;

export const TerminalButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;
