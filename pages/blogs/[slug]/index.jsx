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
  HorizontalLine,
} from "./blogarticle.styled";
import Avatar from "@/components/avatar/Avatar";
import Image from "next/image";
import ArticleTag from "@/components/articletag/ArticleTag";
import ArticleFooter from "@/components/articleFooter/ArticleFooter";
import { article } from "@/constants/blogData";

// const tags = [
//   {
//     tag: <ArticleTag tag="Android" />,
//     tagId: 1,
//   },
//   {
//     tag: <ArticleTag tag="Flutter" />,
//     tagId: 2,
//   },
//   {
//     tag: <ArticleTag tag="Roadmap" />,
//     tagId: 3,
//   },
// ];

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
            <ArticleAuthor>{article.author}</ArticleAuthor>
          </ArticleAuthorContainer>
        </ArticleMetaContainer>
        <HorizontalLine />
        <ArticleContentContainer>
          <ArticleImg src="/images/blogimg.png" />
          <ArticleContent>{article.content}</ArticleContent>
          <HorizontalLine />
        </ArticleContentContainer>
        <ArticleTagsContainer>
          {article.tags.map((tag) => (
            <ArticleTag tag={tag} key={tag.slug} />
          ))}
        </ArticleTagsContainer>
        <FooterContainer>
          <FooterTitle>Read Next</FooterTitle>
          <ArticleFooter />
        </FooterContainer>
      </Article>
      {/* ***REMOVED*** */}
    </>
  );
};

export default BlogArticle;

// export async function getStaticProps({ params }) {
//   try {
//     const blogSlug = params.slug;
//     const article = await prisma.blogs.findUnique({
//       where: {
//         slug: blogSlug,
//       },
//     });

//     if (!article) {
//       return {
//         notFound: true,
//       };
//     }

//     return {
//       props: {
//         article,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching article:", error);
//     return {
//       notFound: true,
//     };
//   }
// }

// export async function getStaticPaths() {
//   try {
//     const blogs = await prisma.blogs.findMany();

//     if (!blogs || blogs.length === 0) {
//       return {
//         notFound: true,
//       };
//     }

//     const blogPaths = blogs.map((blog) => ({
//       params: {
//         slug: blog.slug,
//       },
//     }));

//     return {
//       paths: blogPaths,
//       fallback: false,
//     };
//   } catch (error) {
//     console.error("Error fetching blog paths:", error);
//     return {
//       notFound: true,
//     };
//   }
// }
