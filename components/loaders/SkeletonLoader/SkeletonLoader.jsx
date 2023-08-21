import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {
  SkeletonContainer,
  SkeletonImage,
  SkeletonText,
  SkeletonTextContainer
} from "./SkeletonLoader.styled";

function SkeletonLoader() {
  const skeletonContainers = [];

  for (let i = 0; i < 3; i++) {
    skeletonContainers.push(
      <SkeletonContainer key={i}>
        <SkeletonImage />
        <SkeletonTextContainer>
          <SkeletonText height={25} />
          <SkeletonText
            height={38}
            style={{ marginTop: 20, marginBottom: 22 }}
          />
          <SkeletonText height={20} count={3} style={{ marginBottom: 8 }} />
        </SkeletonTextContainer>
      </SkeletonContainer>
    );
  }

  return <SkeletonTheme>{skeletonContainers}</SkeletonTheme>;
}

export default SkeletonLoader;
