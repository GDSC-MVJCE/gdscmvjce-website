import { devices } from "@/constants/theme";
import styled from "styled-components";

export const Article = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em 8em;

  @media screen and (${devices.lg}) {
    padding: 2em 4em;
  }

  @media screen and (${devices.md}) {
    padding: 2em;
  }

  @media screen and (${devices.sm}) {
    padding: 2em 1em;
  }
`;

export const ArticleTitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 1em;
`;

export const ArticleMetaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media screen and (${devices.sm}) {
    padding: 0;
    justify-content: space-between;
  }
`;

export const ArticleDate = styled.div`
  flex-direction: column;
  text-align: left;
  display: flex;
  justify-content: flex-start;
`;

export const ArticleAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ArticleAuthor = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.contentPrimary};
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid gray;
  margin: 2em 0;

  @media screen and (${devices.lg}) {
    margin: 1em 0 2em 0;
  }
`;

export const ArticleContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const BannerImgContainer = styled.div`
  aspect-ratio: 2560/650;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ArticleTagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const ArticleTag = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.contentSecondary};
  border-radius: 5px;
  padding: 0.5em 1em;
`;
