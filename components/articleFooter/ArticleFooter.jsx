import React from "react";
import {
  ArticleFooterContentContainer,
  ArticleFooterImg,
  ArticleFooterImgDiv,
  ArticleFooterTextContainer,
  ArticleFooterTitle
} from "./ArticleFooter.styled";

import Avatar from "../avatar/Avatar";
import { article } from "@/constants/blogData";
import Image from "next/image";
import Typography from "../display/typography/Typography";
import {
  ArticleAuthor,
  ArticleAuthorContainer,
  ArticleDate,
  ArticleMetaContainer
} from "../blog/BlogArticle.styled";

const ArticleFooter = () => {
  return (
    <ArticleFooterContentContainer>
      <ArticleFooterImgDiv>
        <Image src="/images/blogimg.png" width={200} height={200} alt="" />
        {/* Please fix the image's properties accordingly. Hardcoded 200 for now */}
      </ArticleFooterImgDiv>
      <ArticleFooterTextContainer>
        <ArticleFooterTitle>
          <Typography variant="h2">{article.title}</Typography>
        </ArticleFooterTitle>
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
