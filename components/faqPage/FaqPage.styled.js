import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  padding: 0em 5em;

  @media screen and (${devices.lg}) {
    flex-direction: column;
    padding: 0em 1em;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;

  @media screen and (${devices.lg}) {
    padding: 0em 0em;
    width: 100%;
    position: static;
  }
`;

export const RightContainer = styled.div`
  width: 70%;
  height: 100%;
  overflow: hidden;
  padding-top: 4em;

  @media screen and (${devices.lg}) {
    width: 100%;
    padding-top: 2em;
  }
`;

export const Title = styled.h1`
  margin-top: 0.8em;
  font-size: 4rem;
  font-weight: normal;

  @media screen and (${devices.lg}) {
    font-size: 3rem;
  }
`;

export const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  gap: 1em;

  @media screen and (${devices.lg}) {
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    overflow-x: auto;
    z-index: 10;
    height: fit-content;
    flex-direction: row;
    padding-block: 1em;
    margin-top: 0em;
    gap: 0.3em;
    position: sticky;
    top: 0px;
    left: 0;
  }
`;

export const Button = styled.button`
  padding: 0.7em 1em;
  color: ${({ color, theme }) => (color ? color : theme.colors.contentPrimary)};
  font-size: 1.4rem;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.contentPrimary};
  width: fit-content;
  cursor: pointer;
  background: ${({ inView, bgcolor, theme }) =>
    inView ? bgcolor : theme.colors.bgPrimary};
  font-weight: 500;

  @media screen and (${devices.lg}) {
    flex-direction: column;
    font-size: 0.8rem;
    padding: 0.5em 2em;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.contentPrimary};
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 2.2em;

  @media screen and (${devices.lg}) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  padding: 2.5em 2.4em;
`;

export const CardTitleContainer = styled.div`
  background-color: ${({ bgcolor }) => bgcolor};
  width: 100%;
  padding: 1.5em 2.4em;
  border-bottom: 2px solid ${({ theme }) => theme.colors.contentPrimary};
`;

export const CardFaq = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-block: 1em;
  gap: 0.7em;
`;

export const Hr = styled.div`
  margin-top: 1.2em;
  height: 1px;
  background: ${({ theme }) => theme.colors.contentSecondary};
  border-radius: 100px;
`;
