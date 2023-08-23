import React, { useEffect, useRef, useState } from "react";
import {
  TeamButton,
  TeamDescriptionSection,
  TeamIntroContainer,
  TeamIntroSectionWrapper,
  TeamTitlesSection
} from "./TeamIntro.styled";
import Typography from "../typography/Typography";
import Terminal from "./subcomponents/terminal/Terminal";
import MLIntro from "./subcomponents/mlSection/MLIntro";
import DesignSection from "./subcomponents/designSection/DesignSection";
import ContentSection from "./subcomponents/contentSection/ContentSection";
import CommunitySection from "./subcomponents/communitySection/CommunitySection";
import MobileDesignSection from "./subcomponents/designSection/mobileDesignSection/MobileDesignSection";
import { devices } from "@/constants/theme";

const TeamIntro = () => {
  const [activeTeam, setActiveTeam] = useState("tech");
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
    <TeamIntroContainer>
      <Typography variant="h1">Our dynamic team structure</Typography>
      <TeamIntroSectionWrapper>
        <TeamTitlesSection>
          <TeamButton
            onClick={() => setActiveTeam("tech")}
            isSelected={activeTeam === "tech"}
          >
            Technical
          </TeamButton>
          <TeamButton
            onClick={() => setActiveTeam("android")}
            isSelected={activeTeam === "android"}
          >
            {"ML & Android"}
          </TeamButton>
          <TeamButton
            onClick={() => setActiveTeam("design")}
            isSelected={activeTeam === "design"}
          >
            Design
          </TeamButton>
          <TeamButton
            onClick={() => setActiveTeam("content")}
            isSelected={activeTeam === "content"}
          >
            Content
          </TeamButton>
          <TeamButton
            onClick={() => setActiveTeam("community")}
            isSelected={activeTeam === "community"}
          >
            Community Management
          </TeamButton>
        </TeamTitlesSection>
        <TeamDescriptionSection>
          {activeTeam === "tech" && <Terminal />}
          {activeTeam === "android" && <MLIntro />}
          {activeTeam === "design" &&
            (isMobile ? <MobileDesignSection /> : <DesignSection />)}
          {activeTeam === "content" && <ContentSection />}
          {activeTeam === "community" && <CommunitySection />}
        </TeamDescriptionSection>
      </TeamIntroSectionWrapper>
    </TeamIntroContainer>
  );
};

export default TeamIntro;
