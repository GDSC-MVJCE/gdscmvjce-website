import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import dayjs from "dayjs";

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
import { devices } from "@/constants/theme";
import Avatar from "../avatar/Avatar";
import truncateText from "@/utils/truncate";

function BlogsSection() {
  const limit = 200;

  const [blogsData, setBlogsData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const { data, isLoading } = useSWR(`/api/blogs?page=1`, fetcher, swrConfig);

  useEffect(() => {
    if (data) {
      setBlogsData(data);
    }
  }, [data]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(devices.lg);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
        <Typography variant="body">
          {truncateText(blog.shortDescription, limit)}
        </Typography>
      </TopContainer>
      <BottomContainer>
        <BlogInfo>
          <AuthorInfo>
            <Link
              href={`/profile/${blog.author.username}`}
              style={{ textDecoration: "none" }}
            >
              <Avatar
                url={blog.author.image}
                size="xs"
                blur={false}
                borderWidth={"0px"}
              />
            </Link>
            <Typography variant="bodySmall">{blog.author.name}</Typography>
          </AuthorInfo>
          <Typography variant="bodySmall">
            {dayjs(blog.startDate).format("D MMM YYYY")}
          </Typography>
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
        <Link href={`/blogs`} style={{ textDecoration: "none" }}>
          <ExploreButton>Explore more blogs</ExploreButton>
        </Link>
      )}
    </Container>
  );
}

export default BlogsSection;
