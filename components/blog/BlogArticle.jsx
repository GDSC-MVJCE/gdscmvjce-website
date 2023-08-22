import Navbar from "@/components/navbar/Navbar";
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
import parse from "html-react-parser";

import ArticleTag from "@/components/articletag/ArticleTag";
import ArticleFooter from "@/components/articleFooter/ArticleFooter";
import Typography from "@/components/display/typography/Typography";
import dayjs from "dayjs";

const BlogArticle = ({ article }) => {
  return (
    <>
      <Article>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleMetaContainer>
          <ArticleDate>{dayjs(article.date).format("D MMM YYYY")}</ArticleDate>
          <ArticleAuthorContainer>
            <Avatar url={article.author.image} />
            <ArticleAuthor>
              <Typography>{article.author.name}</Typography>
            </ArticleAuthor>
          </ArticleAuthorContainer>
        </ArticleMetaContainer>
        <HorizontalLine />
        <ArticleContentContainer>
          <ArticleImg
            src={
              article.bannerImage ?? "/images/events/gdsc-event-fallback.png"
            }
          />
          <ArticleContent>
            <Typography>{parse(article.content)}</Typography>
          </ArticleContent>
          <HorizontalLine />
        </ArticleContentContainer>
        <ArticleTagsContainer>
          {article.tags.map((tag) => (
            <ArticleTag tag={tag} key={tag.slug} />
          ))}
        </ArticleTagsContainer>
        {/* <FooterContainer>
          <FooterTitle>
            <Typography variant="h1">Read Next</Typography>
          </FooterTitle>
          <ArticleFooter />
        </FooterContainer> */}
      </Article>
    </>
  );
};

export default BlogArticle;
