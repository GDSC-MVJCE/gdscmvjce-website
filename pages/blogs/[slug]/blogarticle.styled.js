import styled from "styled-components";

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1022px;
  margin: 70px auto;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const ArticleTitle = styled.div`
  font-size: 60px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const ArticleMetaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ArticleDate = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.contentSecondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ArticleAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const ArticleAuthor = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.contentPrimary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #e0e0e0;
  margin: 30px 0;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const ArticleContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const ArticleImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const ArticleContent = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.contentPrimary};
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ArticleTagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin: 70px auto;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const FooterTitle = styled.div`
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
