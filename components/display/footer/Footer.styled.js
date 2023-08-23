import styled from "styled-components";
import { devices } from "@/constants/theme";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: 30px 30px 0 0;

  @media screen and (${devices.lg}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterSocials = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  color: ${({ theme }) => theme.colors.contentSecondary};
  @media screen and (${devices.lg}) {
    gap: 10px;
    margin-top: 1em;
    flex-direction: column;
  }
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${({ theme }) => theme.colors.bodyPrimary};
  @media screen and (${devices.lg}) {
    gap: 5px;
    margin-bottom: 1em;
  }
`;

export const FooterMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.contentSecondary};

  @media screen and (${devices.lg}) {
    align-items: center;
  }
`;

export const FooterGithub = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
