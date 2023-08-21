import { styled } from "styled-components";

export const GradientBall = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 0, 0.5) 20%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
