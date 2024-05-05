import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { useTheme } from "styled-components";

import {
  Button,
  Container,
  BlogInfo,
  BlogCard,
  BlogCardContainer,
  TopContainer,
  ExploreButton,
  ImageContainer,
  TitleContainer,
  AuthorInfo,
  BottomContainer
} from "./BlogSection.styled";
import Typography from "../display/typography/Typography";
import fetcher from "@/utils/fetcher";
import { swrConfig } from "@/constants/swrConfig";
import SpinnerLoader from "@/components/loaders/spinnerLoader/SpinnerLoader";
import Avatar from "../avatar/Avatar";
import truncateText from "@/utils/truncate";
import isoToDate from "@/utils/isoToDate";

function BlogsSection({ isMobile }) {
  const limit = 200;

  const [blogsData, setBlogsData] = useState([]);

  const theme = useTheme();

  const { data, isLoading } = useSWR(`/api/blogs?page=1`, fetcher, swrConfig);

  useEffect(() => {
    if (data) {
      setBlogsData(data);
    }
  }, [data]);

  isLoading && <SpinnerLoader />;

  const cardsElement = blogsData.map((blog) => (
    <BlogCard key={blog.id}>
      <TopContainer>
        <ImageContainer>
          <Image
            src={blog.thumbnail ?? "/images/gdsc_fallback.png"}
            fill="responsive"
            alt={blog.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
            style={{
              borderRadius: "8px",
              objectFit: "cover"
            }}
          />
        </ImageContainer>
        <Typography variant="h4">{blog.title}</Typography>
        <Typography variant="bodySmall">
          {truncateText(blog.shortDescription, limit)}
        </Typography>
      </TopContainer>
      <BottomContainer>
        <BlogInfo>
          <AuthorInfo>
            <Avatar
              url={blog.author.image}
              size="xs"
              blur={false}
              borderWidth={"2px"}
              borderColor={theme.colors.brandBlue}
            />
            <Typography variant="bodySmall">{blog.author.name}</Typography>
          </AuthorInfo>
          <Typography variant="bodySmall">{isoToDate(blog.date)}</Typography>
        </BlogInfo>
        <Link href={`/blogs/${blog.slug}`} style={{ textDecoration: "none" }}>
          <Button>Read more</Button>
        </Link>
      </BottomContainer>
    </BlogCard>
  ));

  return (
    <Container>
      <TitleContainer>
        <Typography variant="h1">Our Blogs</Typography>
        {!isMobile && (
          <Link href={`/blogs`} style={{ textDecoration: "none" }}>
            <ExploreButton>Explore more blogs</ExploreButton>
          </Link>
        )}
      </TitleContainer>
      <BlogCardContainer>{cardsElement}</BlogCardContainer>
      {isMobile && (
        <Link href={`/blogs`} style={{ textDecoration: "none", width: "100%" }}>
          <ExploreButton>Explore more blogs</ExploreButton>
        </Link>
      )}
    </Container>
  );
}

export default BlogsSection;
