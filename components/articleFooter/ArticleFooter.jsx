import React from "react";
import {
  ArticleFooterContentContainer,
  ArticleFooterImg,
  ArticleFooterTextContainer,
  ArticleFooterTitle,
} from "./ArticleFooter.styled";
import {
  ArticleAuthor,
  ArticleAuthorContainer,
  ArticleDate,
  ArticleMetaContainer,
} from "@/pages/blogs/[slug]/blogarticle.styled";
import Avatar from "../avatar/Avatar";
import { article } from "@/constants/blogData";

const ArticleFooter = () => {
  return (
    <ArticleFooterContentContainer>
      <ArticleFooterImg src="/images/blogimg.png" />
      <ArticleFooterTextContainer>
        <ArticleFooterTitle>{article.title}</ArticleFooterTitle>
        <ArticleMetaContainer>
          <ArticleDate>{article.publishedDate}</ArticleDate>
          <ArticleAuthorContainer>
            <Avatar url="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" />
            <ArticleAuthor>{article.author}</ArticleAuthor>
          </ArticleAuthorContainer>
        </ArticleMetaContainer>
      </ArticleFooterTextContainer>
    </ArticleFooterContentContainer>
  );
};

export default ArticleFooter;
