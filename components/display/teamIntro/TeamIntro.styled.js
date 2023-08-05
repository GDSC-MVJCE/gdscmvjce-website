import { styled } from 'styled-components';

export const TeamIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100%;
  gap: 4rem;
  padding: 2rem 2rem;
`;

export const TeamIntroSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
`;

export const TeamTitlesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-basis: 30%;
`;

export const TeamDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-basis: 50%;
`;

export const TeamButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 16px 23px;
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
`;

export const TerminalContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 773px;
  width: 100%;
  min-width: 300px;
  min-height: 400px;
  height: 100%;
  border-radius: 13px;
  background: #171717;
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
`;

export const TerminalButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;
