import { keyframes, styled } from "styled-components";

const tiltin = keyframes`
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`;
export const MobileDesignSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 500px;
  object-fit: cover;
  gap: 2rem;

  .illustration {
    animation: ${tiltin} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`;
