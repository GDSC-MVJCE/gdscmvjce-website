import React, { useState } from "react";
import GallerySlide from "./gallerySlide/GallerySlide";
import {
  GalleryCarouselContainer,
  GalleryCarouselWrapper,
} from "./GalleryCarousel.styled";
import Typography from "../display/typography/Typography";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

const GalleryCarousel = () => {
  const slides = [
    {
      key: "23",
      content: (
        <GallerySlide
          galleryImageData={{
            title: "GDSC Website",
            event: {
              title: "Web Workshop",
              id: "1",
            },
            date: "2021-03-21T00:00:00.000Z",
            url: "https://images.unsplash.com/photo-1616499452581-cc7f8e3dd3c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
        />
      ),
    },
    {
      key: "231312",
      content: (
        <GallerySlide
          galleryImageData={{
            title: "GDSC Website",
            event: {
              title: "Web Workshop",
              id: "1",
            },
            date: "2021-03-21T00:00:00.000Z",
            url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          }}
        />
      ),
    },
    {
      key: "23141312",
      content: (
        <GallerySlide
          galleryImageData={{
            title: "GDSC Website",
            event: {
              title: "Web Workshop",
              id: "1",
            },
            date: "2021-03-21T00:00:00.000Z",
            url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          }}
        />
      ),
    },
    {
      key: "23141311232",
      content: (
        <GallerySlide
          galleryImageData={{
            title: "GDSC Website",
            event: {
              title: "Web Workshop",
              id: "1",
            },
            date: "2021-03-21T00:00:00.000Z",
            url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          }}
        />
      ),
    },
    {
      key: "231413adw12",
      content: (
        <GallerySlide
          galleryImageData={{
            title: "GDSC Website",
            event: {
              title: "Web Workshop",
              id: "1",
            },
            date: "2021-03-21T00:00:00.000Z",
            url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          }}
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setCurrentSlide(index) };
  });
  const [currentSlide, setCurrentSlide] = useState(slides[0].key);

  return (
    <GalleryCarouselContainer>
      <Typography variant="h1">Highlights from the past</Typography>
      <GalleryCarouselWrapper>
        <Carousel slides={slides} offsetRadius={5} goToSlide={currentSlide} />
      </GalleryCarouselWrapper>
    </GalleryCarouselContainer>
  );
};

export default GalleryCarousel;
