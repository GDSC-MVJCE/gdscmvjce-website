import { styled } from "styled-components";

export const GalleryCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
`;

export const GalleryCarouselWrapper = styled.div`
  width: 100%;
  padding: 0 25rem;
  max-width: 100vw;
  max-height: 100vh;
  height: 560px;
  position: relative;
`;
