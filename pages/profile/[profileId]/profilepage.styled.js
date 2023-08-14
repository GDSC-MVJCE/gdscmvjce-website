import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90vw;
  margin: 70px auto;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const ProfileBanner = styled.div`
  height: 350px;
  background: ${({ theme }) => theme.colors.brandBlue};
  width: 100%;
  border-radius: 11px;
  position: relative;
`;

export const ProfileBannerAvatar = styled.div`
  position: absolute;
  top: 75%;
  left: 20%;
`;

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 80px;
  //   background: ${({ theme }) => theme.colors.brandBlue};
  height: 500px;
  align-items: start;
`;

export const ProfileName = styled.div`
  color: ${({ theme }) => theme.colors.contentPrimary};
`;

export const ProfileDesignation = styled.div``;

export const ProfileBio = styled.div`
  color: ${({ theme }) => theme.colors.contentSecondary};
  margin-top: 20px;
`;

export const ProfileSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 20px;
`;

export const ProfileAbout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const ProfileAboutHeading = styled.div`
  color: ${({ theme }) => theme.colors.contentPrimary};
`;

export const ProfileAboutContent = styled.div`
  color: ${({ theme }) => theme.colors.contentSecondary};
  margin-top: 20px;
`;

export const ProfileFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const ProfileFooterHeading = styled.div`
  color: ${({ theme }) => theme.colors.contentPrimary};
`;

export const ProfileFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 1rem;
`;
