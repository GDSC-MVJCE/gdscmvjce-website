import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image.js";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  AuthorInfo,
  BlogInfo,
  BlogTags,
  BlogTitle,
  BlogsCard,
  BlogsContainer,
  BlogsFilterTitle,
  BlogsPageContainer,
  CardFooter,
  FilterCard,
  FilterContainer,
  ImageContainer,
  LeftContainer,
  RightContainer
} from "./BlogsPage.styled";
import Typography from "../display/typography/Typography.jsx";
import capitalize from "@/utils/capitalize";
import fetcher from "@/utils/fetcher";
import { blogFilters } from "@/constants/filterTags";
import { devices } from "@/constants/theme";
import { swrConfig } from "@/constants/swrConfig";
import SpinnerLoader from "../loaders/spinnerLoader/SpinnerLoader";
import Avatar from "../avatar/Avatar";
import truncateText from "@/utils/truncate";

function BlogsPage() {
  const TOP_OFFSET = 77;
  const limit = 200;

  const theme = useTheme();
  const router = useRouter();
  const { type } = router.query;
  const { pathname, query } = router;

  const [isActive, setIsActive] = useState(type ? type : "all");
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [blogsData, setBlogsData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsActive(type ? type : "all");
    setPageNumber(1);
    setHasMore(true);
    blogsData.length = 0;
  }, [type]);

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

  function handleFilterChange(filter) {
    if (filter === "all") {
      delete router.query.type;
      router.replace({ pathname, query }, undefined, { shallow: true });
    } else router.push(`/blogs?type=${filter}`);
  }

  const { data } = useSWR(
    `/api/blogs?page=${pageNumber}${
      isActive !== "all" ? `&type=${isActive}` : ""
    }`,
    fetcher,
    swrConfig
  );

  useEffect(() => {
    if (data) {
      setBlogsData((prevData) => [...prevData, ...data]);
    }
    if (data && data.length < 3) {
      setHasMore(false);
    }
  }, [data]);

  const fetchMoreData = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const arrowMotion = {
    initial: { x: 0 },
    hover: { x: 5 }
  };

  const coverImageMotion = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  const filterElements = blogFilters.map((filter) => (
    <FilterCard
      key={filter.label}
      onClick={() => handleFilterChange(filter.slug)}
      initial="initial"
      animate="initial"
      whileHover="hover"
      borderColor={
        isActive === filter.slug && isMobile
          ? theme?.colors.brandGreen
          : theme?.colors.contentSecondary
      }
    >
      <Typography
        variant="bodyEmphasized"
        color={isActive === filter.slug ? theme?.colors.brandGreen : "inherit"}
      >
        {filter.label}
      </Typography>
      {!isMobile && (
        <motion.span variants={arrowMotion}>
          <Typography
            variant="h5"
            color={
              isActive === filter.slug ? theme?.colors.brandGreen : "inherit"
            }
          >
            &rarr;
          </Typography>
        </motion.span>
      )}
    </FilterCard>
  ));

  return (
    <>
      {blogsData && (
        <BlogsPageContainer>
          <BlogsFilterTitle>
            <Typography style={{ marginLeft: "2px" }} variant="h1">
              {capitalize(isActive)} Blogs
            </Typography>
          </BlogsFilterTitle>
          <BlogsContainer>
            <LeftContainer>
              <InfiniteScroll
                dataLength={blogsData.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<SpinnerLoader size="40px" />}
                style={{ padding: "1em" }}
              >
                {blogsData.map((blog, index) => {
                  const BlogTagsElements = blog.tags.map((tag, index) => (
                    <Typography variant="body" subdued key={index}>
                      {tag.label}
                      &nbsp;
                      {index < blog.tags.length - 1 && " | "}
                      &nbsp;
                    </Typography>
                  ));
                  return (
                    <Link
                      href={pathname + "/" + blog.slug}
                      key={index}
                      style={{ textDecoration: "none" }}
                    >
                      <BlogsCard
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover="hover"
                        transition={{
                          duration: 0.3,
                          delay: 0.3
                        }}
                      >
                        <ImageContainer variants={coverImageMotion}>
                          <Image
                            src={blog.thumbnail ?? "/images/gdsc_fallback.png"}
                            alt={blog.title}
                            fill="responsive"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                            style={{
                              borderRadius: "inherit",
                              objectFit: "cover"
                            }}
                          />
                        </ImageContainer>
                        <BlogInfo>
                          <BlogTags>{BlogTagsElements}</BlogTags>
                          <BlogTitle variant="h3">{blog.title}</BlogTitle>
                          <Typography variant="body">
                            {truncateText(blog.shortDescription, limit)}
                          </Typography>
                          <CardFooter>
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
                              <Typography variant="bodySmall">
                                {blog.author.name}
                              </Typography>
                            </AuthorInfo>
                            <Typography variant="bodySmall">
                              {dayjs(blog.startDate).format("D MMM YYYY")}
                            </Typography>
                          </CardFooter>
                        </BlogInfo>
                      </BlogsCard>
                    </Link>
                  );
                })}
              </InfiniteScroll>
            </LeftContainer>
            <RightContainer isVisible={showBackground}>
              {!isMobile && (
                <Typography variant="h3" style={{ paddingLeft: "0.5em" }}>
                  Tags
                </Typography>
              )}
              <FilterContainer>{filterElements}</FilterContainer>
            </RightContainer>
          </BlogsContainer>
        </BlogsPageContainer>
      )}
    </>
  );
}

export default BlogsPage;
