import React, { useEffect, useState } from "react";
import { devices } from "@/constants/theme";
import {
  LeadContainer,
  TeamContainer,
  TeamMembersWrapper,
  TeamPageContainer
} from "./TeamPage.styled";
import Typography from "../display/typography/Typography";
import { useTheme } from "styled-components";
import MemberCard from "./memberCard/MemberCard";

const TeamPage = ({ teamData }) => {
  const theme = useTheme();
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
  const borderColors = [
    theme.colors.brandBlue,
    theme.colors.brandGreen,
    theme.colors.brandRed,
    theme.colors.brandYellow
  ];
  return (
    <TeamPageContainer>
      <Typography color={theme.colors.brandBlue} variant="h1">
        {teamData.name}
      </Typography>
      <LeadContainer>
        <MemberCard
          member={teamData.lead}
          avatarBorderColor={theme.colors.brandBlue}
          avatarSize={isMobile ? "lg" : "xl"}
        />
      </LeadContainer>
      <TeamContainer>
        <Typography variant="h2">Core Team</Typography>
        <TeamMembersWrapper>
          {teamData.core.map((member, index) => (
            <MemberCard
              key={member.id}
              member={member}
              avatarBorderColor={borderColors[index % 4]}
              avatarSize={isMobile ? "lg" : "xl"}
            />
          ))}
        </TeamMembersWrapper>
      </TeamContainer>
      <TeamContainer>
        <Typography variant="h2">Sub-Team Members</Typography>
        <TeamMembersWrapper>
          {teamData.members.map((member, index) => (
            <MemberCard
              key={member.id}
              member={member}
              avatarBorderColor={theme.colors.brandBlue}
              avatarSize={isMobile ? "lg" : "xl"}
            />
          ))}
        </TeamMembersWrapper>
      </TeamContainer>
    </TeamPageContainer>
  );
};

export default TeamPage;
