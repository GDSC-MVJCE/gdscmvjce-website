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
  ArticleTag,
  ArticleTagsContainer,
  ArticleTitle,
  ArticleTitleContainer,
  BannerImgContainer,
  FooterContainer,
  FooterTitle,
  HorizontalLine
} from "./blogarticle.styled";
import Avatar from "@/components/avatar/Avatar";
import parse from "html-react-parser";

import ArticleFooter from "@/components/articleFooter/ArticleFooter";
import Typography from "@/components/display/typography/Typography";
import dayjs from "dayjs";
import { BannerImageContainer } from "../registrationPage/RegistrationPage.styled";
import Image from "next/image";
import Link from "next/link";

const BlogArticle = ({ article }) => {
  return (
    <Article>
      <ArticleTitleContainer>
        <Typography variant="displayLarge">{article.title}</Typography>
        <ArticleMetaContainer>
          <ArticleDate>
            <Typography variant="body" subdued={true}>
              {dayjs(article.date).format("D MMM YYYY")}
            </Typography>
          </ArticleDate>
          <ArticleAuthorContainer>
            <Avatar url={article.author.image} borderWidth={"0px"} />
            <ArticleAuthor>
              <Typography>{article.author.name}</Typography>
            </ArticleAuthor>
          </ArticleAuthorContainer>
        </ArticleMetaContainer>
      </ArticleTitleContainer>
      <HorizontalLine />
      <ArticleContentContainer>
        <BannerImgContainer>
          <Image
            src={
              article.bannerImage ?? "/images/events/gdsc-event-fallback.png"
            }
            alt={article.title}
            fill="responsive"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              borderRadius: "inherit"
            }}
          />
        </BannerImgContainer>
        <Typography>{parse(article.content)}</Typography>
        <HorizontalLine />
      </ArticleContentContainer>
      <ArticleTagsContainer>
        {article.tags.map((tag) => (
          <Link
            key={tag.id}
            href={`/blogs?type=${tag.slug}`}
            style={{ textDecoration: "none" }}
          >
            <ArticleTag>
              <Typography variant="body">{tag.label}</Typography>
            </ArticleTag>
          </Link>
        ))}
      </ArticleTagsContainer>
    </Article>
  );
};

export default BlogArticle;
