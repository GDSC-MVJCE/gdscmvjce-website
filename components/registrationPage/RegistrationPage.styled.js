import { devices } from "@/constants/theme";
import { styled } from "styled-components";

export const RegistrationPageContainer = styled.div`
  width: 100%;
  padding: 40px 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;

  @media ${devices.md} {
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

  .descriptionText {
    text-align: center;
    max-width: 600px;
  }
  @media ${devices.md} {
    padding: 40px 0px;
  }
`;

export const BannerImageContainer = styled.div`
  width: 950px;
  margin-top: -30px;
  aspect-ratio: 16/9;
  position: relative;
  object-fit: cover;
  overflow: hidden;
  &img {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: ${({ theme }) => theme.colors.brandBlue};
    scale: 1.05;
  }
  @media ${devices.md} {
    margin-top: -50px;
    width: 340px;
  }
`;

export const ProceduresContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;

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
  @media ${devices.md} {
    gap: 50px;
  }
`;

export const ProcessCard = styled.div`
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

  .applyDescription {
    max-width: 650px;
    text-align: center;
  }
`;

export const ApplyButton = styled.button`
  width: fit-content;
  min-width: 200px;
  padding: 15px 20px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.brandBlue};
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brandBlue + 95};
    color: #ffffff;
    transform: scale(1.05);
  }
  @media ${devices.md} {
    width: 100%;
  }
`;

export const FAQButton = styled.button`
  width: fit-content;
  min-width: 200px;
  padding: 15px 20px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  color: #363636;
  border: 1px solid #363636;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  @media ${devices.md} {
    width: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    color: #363636;
    transform: scale(1.05);
  }
`;

export const TeamImageContainer = styled.div`
  width: 900px;
  height: 450px;
  position: relative;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
  @media ${devices.md} {
    width: 340px;
    height: 170px;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media ${devices.md} {
    flex-direction: column;
    gap: 10px;
  }
`;
