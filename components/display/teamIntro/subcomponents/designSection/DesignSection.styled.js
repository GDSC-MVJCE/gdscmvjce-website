import { styled } from 'styled-components';

export const DesignSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .canvas {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 70%;
  }

  .draggable {
    z-index: 100;
    position: absolute;
    cursor: grab;
  }
  .text-draggable {
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.brandBlue};
    max-width: 390px;
    padding: 0.5rem;
  }
`;
