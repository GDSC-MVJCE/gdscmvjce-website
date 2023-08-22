import React from "react";
import {
  GalleryImageContainer,
  GalleryInfoWrapper,
  GallerySlideContainer
} from "./GallerySlide.styled";
import Image from "next/image";
import Typography from "@/components/display/typography/Typography";
import dayjs from "dayjs";

const GallerySlide = ({ galleryImageData, isFocused }) => {
  return (
    <GallerySlideContainer>
      <GalleryImageContainer>
        <Image
          src={galleryImageData.url}
          alt="gallery image"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </GalleryImageContainer>
      <GalleryInfoWrapper>
        <Typography variant="h3" color="white">
          {galleryImageData.title}
        </Typography>
        <div className="meta">
          <Typography variant="h6" color="white">
            {dayjs(galleryImageData.date).format("MMMM YYYY")}
          </Typography>
          <Typography variant="h6" color="white">
            {"•"}
          </Typography>
          <Typography variant="h6" color="white">
            {galleryImageData.event.title}
          </Typography>
        </div>
      </GalleryInfoWrapper>
    </GallerySlideContainer>
  );
};

export default GallerySlide;
