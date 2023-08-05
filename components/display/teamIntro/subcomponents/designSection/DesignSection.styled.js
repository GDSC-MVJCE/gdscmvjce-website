import { styled } from 'styled-components';

export const DesignSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .canvas {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 70%;
    overflow: hidden;
    z-index: 2;
  }

  .canvas-bound {
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 67%;
    overflow: hidden;
    z-index: 2;
    border: 1px solid blue;
  }

  .draggable {
    z-index: 1;
    position: absolute;
    cursor: grab;
  }
  .text-draggable {
    width: 100%;
    max-width: 390px;
    padding: 0.5rem;
  }
  .blob1 {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    filter: blur(50px);
    background-color: ${({ theme }) => theme.colors.brandBlue};
  }
  .blob2 {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    filter: blur(50px);
    background-color: ${({ theme }) => theme.colors.brandGreen};
  }
  .logo {
    width: 260px;
  }
`;
