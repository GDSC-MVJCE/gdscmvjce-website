import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  padding: 2em 10em;
  text-align: center;
  gap: 20px;
`;

export const EventCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.bgTertiary};
  border-radius: 8px;
  padding: 1em;
  width: 400px;
  height: 600px;
  text-align: left;
  justify-content: space-between;
`;

export const DateLine = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 1em;
`;

export const Button = styled.div`
  background: #4285f4;
  width: 354px;
  padding: 0.8em;
  color: white;
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  align-self: center;
`;

export const ExploreButton = styled.div`
  background: ${({ theme }) => theme.colors.bgPrimary};
  border: 2px solid #4285f4;
  width: 300px;
  padding: 0.8em;
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  align-self: center;
`;

export const Top = styled.div``;
