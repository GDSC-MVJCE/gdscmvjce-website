import Link from "next/link";
import { useTheme } from "styled-components";

import Typography from "../typography/Typography";
import {
  AboutSectionWrapper,
  ClubName,
  HeadingContainer,
  LeftContainer,
  RightContainer,
  Span
} from "./AboutSection.styled";
import LogoCanvas from "@/components/canvas/GDSCLogo";

function AboutSection() {
  const theme = useTheme();

  return (
    <AboutSectionWrapper>
      <LeftContainer>
        <LogoCanvas />
      </LeftContainer>
      <RightContainer>
        <HeadingContainer>
          <Typography variant="h1">What is</Typography>
          <Link
            href="https://developers.google.com/community/gdsc"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Typography variant="h1">
              <ClubName
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                whileHover={{ y: -10 }}
              >
                &nbsp;
                <Span color={theme.colors.brandRed}>G</Span>
                <Span color={theme.colors.brandBlue}>D</Span>
                <Span color={theme.colors.brandGreen}>S</Span>
                <Span color={theme.colors.brandYellow}>C</Span>?
              </ClubName>
            </Typography>
          </Link>
        </HeadingContainer>
        <Typography variant="body">
          Welcome to the realm of GDSC! As part of Google Developer Student
          Clubs, we&apos;re a global network with over 1,900 chapters in 100+
          countries. Join us to connect with like-minded students interested in
          tech, regardless of your background.
        </Typography>
        <Typography variant="body">
          Explore hands-on workshops, talks, and projects both online and
          offline. Grow your skills, build solutions for local challenges, and
          give back to the community. With GDSC, you&apos;re not just learning -
          you&apos;re shaping your future as a developer and making an impact.
        </Typography>
      </RightContainer>
    </AboutSectionWrapper>
  );
}

export default AboutSection;
