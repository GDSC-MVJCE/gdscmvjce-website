import Navbar from "@/components/navbar/Navbar";
import { MainContainer } from "@/components/navbar/Navbar.styled";
import React from "react";
import {
  Article,
  ArticleAuthor,
  ArticleAuthorContainer,
  ArticleContent,
  ArticleContentContainer,
  ArticleDate,
  ArticleImg,
  ArticleMetaContainer,
  ArticleTagsContainer,
  ArticleTitle,
  FooterContainer,
  FooterTitle,
  HorizontalLine
} from "./blogarticle.styled";
import Avatar from "@/components/avatar/Avatar";

import ArticleTag from "@/components/articletag/ArticleTag";
import ArticleFooter from "@/components/articleFooter/ArticleFooter";
import { article } from "@/constants/blogData";
import Typography from "@/components/display/typography/Typography";

const BlogArticle = ({}) => {
  return (
    <>
      <Navbar />
      <Article>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleMetaContainer>
          <ArticleDate>{article.publishedDate}</ArticleDate>
          <ArticleAuthorContainer>
            <Avatar url="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" />
            <ArticleAuthor>
              <Typography>{article.author}</Typography>
            </ArticleAuthor>
          </ArticleAuthorContainer>
        </ArticleMetaContainer>
        <HorizontalLine />
        <ArticleContentContainer>
          <ArticleImg src="/images/blogimg.png" />
          <ArticleContent>
            <Typography>{article.content}</Typography>
          </ArticleContent>
          <HorizontalLine />
        </ArticleContentContainer>
        <ArticleTagsContainer>
          {article.tags.map((tag) => (
            <ArticleTag tag={tag} key={tag.slug} />
          ))}
        </ArticleTagsContainer>
        <FooterContainer>
          <FooterTitle>
            <Typography variant="h1">Read Next</Typography>
          </FooterTitle>
          <ArticleFooter />
        </FooterContainer>
      </Article>
    </>
  );
};

export default BlogArticle;
