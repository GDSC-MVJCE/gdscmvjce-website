import styled from "styled-components";

export const MainContainer = styled.div`
  height: 80vh;
  margin: 5em 3em;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5em;
  padding: 2em 5em;
`;

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.bgTertiary};
  height: 460px;
  width: 320px;
  border-radius: 8px;
  padding: 1em;
`;

export const TopContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Date = styled.div``;
