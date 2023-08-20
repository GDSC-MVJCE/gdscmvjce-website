import { devices } from "@/constants/theme";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export const SkeletonContainer = styled.div`
  display: flex;
  width: 900px;
  height: 300px;
  gap: 30px;
  align-items: center;
  margin-bottom: 4em;
  box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.16);
  border-radius: 10px;

  @media screen and (${devices.lg}) {
    flex-direction: column;
    align-items: center;
    height: 690px;
    width: 450px;
    gap: 20px;
  }

  @media screen and (${devices.sm}) {
    flex-direction: column;
    align-items: center;
    height: 690px;
    width: 450px;
    gap: 20px;
  }
`;

export const SkeletonImage = styled(Skeleton)`
  width: 270px;
  height: 270px;

  @media screen and (${devices.lg}) {
    width: 450px;
    height: 450px;
    border-radius: 10px 10px 0 0;
  }
`;

export const SkeletonText = styled(Skeleton)`
  /* width: 610px;

  @media screen and (${devices.lg}) {
    width: 410px;
  } */
`;

export const SkeletonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
`;
