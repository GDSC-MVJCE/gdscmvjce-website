import React, { useEffect, useState } from "react";
import GoogleDocsWindow from "@public/images/googledocs_window.svg";
import GoogleDocsMobileWindow from "@public/images/mobile_docs.svg";
import { ContentSectionContainer } from "./ContentSection.styled";
import { TypingEffect } from "@/components/display/typography/typingEffect/TypingEffect";
import { devices } from "@/constants/theme";
const ContentSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia(devices.lg);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <ContentSectionContainer>
      {isMobile ? <GoogleDocsMobileWindow /> : <GoogleDocsWindow />}
      <div className="docs-text">
        <TypingEffect interKeyStrokeDurationInMs={20} showCursor={true}>
          The Content Team at GDSC MVJCE is the storytelling heart of our
          community. They curate captivating blogs, craft insightful articles,
          and orchestrate engaging newsletters. With a passion for sharing
          knowledge and fostering connections, this team weaves words into
          meaningful narratives that keep our members informed and inspired.
        </TypingEffect>
      </div>
    </ContentSectionContainer>
  );
};

export default ContentSection;
