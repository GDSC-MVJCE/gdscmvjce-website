import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const StyledCanvas = styled(Canvas)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  cursor: url("/cursors/cursor-pointer.svg") 10 0, auto;
`;
