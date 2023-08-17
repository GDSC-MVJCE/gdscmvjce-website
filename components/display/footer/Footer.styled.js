import { styled } from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  height: 140px;
  justify-content: space-between;
  align-items: center;
  padding: 0 3em;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
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
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${({ theme }) => theme.colors.bodyPrimary};
`;

export const FooterMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  color: ${({ theme }) => theme.colors.contentSecondary};
`;

export const FooterGithub = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
