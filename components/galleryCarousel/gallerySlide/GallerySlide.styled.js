import { styled } from "styled-components";

export const GallerySlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 900px;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export const GalleryImageContainer = styled.div`
  margin: auto;
  height: 100%;
  aspect-ratio: 16/9;
  object-fit: cover !important;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  &img {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const GalleryInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 2rem;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);

  .meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }
`;
