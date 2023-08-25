import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const RegistrationPageContainer = styled.main`
  width: 100%;
  padding: 40px 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;

  @media screen and (${devices.lg}) {
    padding: 15px 50px;
  }

  @media screen and (${devices.md}) {
    padding: 15px 20px;
    gap: 40px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  gap: 1em;

  .descriptionText {
    text-align: center;
    max-width: 600px;
  }

  @media screen and (${devices.md}) {
    padding: 10px 0px;
  }
`;

export const BannerImageContainer = styled.div`
  width: 100%;
  margin-top: -30px;
  aspect-ratio: 16/9;
  position: relative;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.16);
`;

export const ProceduresContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3em;

  .card-1 {
    align-self: flex-start;
    margin-top: -20px;
  }

  .card-2 {
    align-self: center;
  }

  .card-3 {
    align-self: flex-end;
  }
`;

export const ProcessCard = styled.section`
  width: fit-content;
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1.5px solid #bdbdbd;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  z-index: 5;

  &:hover {
    border-color: ${({ theme }) => theme.colors.brandBlue};
    scale: 1.1;
  }

  .icon {
    width: 30px;
    height: 30px;
  }
`;

export const ApplyNowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 5em;

  .applyDescription {
    width: 80%;
  }
`;

export const ApplyButton = styled.button`
  width: fit-content;
  min-width: 200px;
  padding: 15px 20px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.brandBlue};
  color: ${({ theme }) => theme.colors.bgPrimary};
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #0a5ce4;
    border-radius: 50%;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
    color: #ffffff;
    border: 2px solid #0a5ce4;
    transform: scale(1.05);
  }

  &:hover:before {
    top: -35%;
    background-color: #0a5ce4;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: #0a5ce4;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  @media screen and (${devices.md}) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const FAQButton = styled.button`
  width: fit-content;
  min-width: 200px;
  padding: 15px 20px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.contentPrimary};
  border: 1px solid ${({ theme }) => theme.colors.contentSecondary};
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    border-radius: 50%;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.bgSecondary};
    transform: scale(1.05);
  }

  &:hover:before {
    top: -35%;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  @media screen and (${devices.md}) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const TeamImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  position: relative;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (${devices.md}) {
    flex-direction: column;
    gap: 10px;
  }
`;
