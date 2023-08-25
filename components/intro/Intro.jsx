import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import debounce from "lodash.debounce";

import {
  IntroContainer,
  LeftContainer,
  RightContainer,
  LeftInnerContainer,
  HeadingContainer,
  AvatarContainer,
  IntersectingPoint,
  Span,
  ClubName
} from "./Intro.styled";
import Typography from "../display/typography/Typography";
import { useTheme } from "styled-components";
import FloatingLabel from "../display/typography/floatingLabel/FloatingLabel";
import FloatingAvatar from "../avatar/floatingAvatar/FloatingAvatar";
import { devices } from "@/constants/theme";

function Intro() {
  const theme = useTheme();
  const updateXarrow = useXarrow();
  const handleXarrowUpdate = debounce(updateXarrow, 0.1);
  const ref0 = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(devices.sm);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (
      ref0.current !== undefined &&
      ref1.current !== undefined &&
      ref2.current !== undefined
    )
      return handleXarrowUpdate();
  }, [handleXarrowUpdate, ref0, ref1, ref2]);

  const avatarData = [
    {
      url: "/images/events/Event1.jpg",
      alt: "Web Development Workshop Image",
      borderColor: theme.colors.brandBlue,
      x: 0,
      y: 30
    },
    {
      url: "/images/events/Event2.png",
      alt: "Web Development Workshop Image",
      borderColor: theme.colors.brandGreen,
      x: isMobile ? 190 : 250,
      y: 100
    },
    {
      url: "/images/events/Event3.jpg",
      alt: "Web Development Workshop Image",
      borderColor: theme.colors.brandYellow,
      x: 50,
      y: isMobile ? 210 : 260
    }
  ];

  const floatingLabelData = [
    {
      label: "Study Jams",
      color: theme.colors.brandBlue,
      x: isMobile ? -20 : -50,
      y: isMobile ? 150 : 210
    },

    {
      label: "Hackathons",
      color: theme.colors.brandRed,
      x: isMobile ? 150 : 200,
      y: 30
    },
    {
      label: "Workshops",
      color: theme.colors.brandGreen,
      x: isMobile ? 180 : 250,
      y: isMobile ? 260 : 280
    }
  ];

  const avatarElements = avatarData.map((avatar, index) => {
    return (
      <FloatingAvatar
        key={index}
        id={`avatar-${index}`}
        url={avatar.url}
        alt={avatar.alt}
        size={isMobile ? "lg" : "xl"}
        borderColor={avatar.borderColor}
        top={avatar.y}
        left={avatar.x}
        delay={index}
        ref={
          index === 0 ? ref0 : index === 1 ? ref1 : index === 2 ? ref2 : null
        }
        blur={true}
      />
    );
  });

  const floatingLabelElements = floatingLabelData.map((label, index) => {
    return (
      <FloatingLabel
        key={index}
        variant="h4"
        color={label.color}
        top={label.y}
        left={label.x}
        delay={index}
        opacity={0.3}
      >
        {label.label}
      </FloatingLabel>
    );
  });

  return (
    <IntroContainer>
      <LeftContainer>
        <LeftInnerContainer>
          <HeadingContainer>
            <Typography variant="h1">Why join </Typography>
            <Link
              href="https://gdsc.community.dev/mvj-college-of-engineering-bengaluru"
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
            Join us to embark on a journey of learning, collaboration, and
            personal growth. With a range of workshops, competitions, mentorship
            programs, and networking events, we provide the platform for you to
            enhance your technical skills and connect with like-minded
            individuals.
          </Typography>
          <Typography variant="body">
            As a member of our vibrant community, you&apos;ll have the
            opportunity to collaborate on exciting projects, exchange ideas, and
            inspire each other to push the boundaries of innovation. Together,
            let&apos;s shape the future of technology and make a positive impact
            on the world.
          </Typography>
        </LeftInnerContainer>
      </LeftContainer>
      <RightContainer>
        <AvatarContainer>
          <Xwrapper>
            {avatarElements}
            <IntersectingPoint id="center" delay={1.2} />
            {floatingLabelElements}
            <Xarrow
              start={ref0}
              end={"center"}
              startAnchor={"middle"}
              endAnchor={"middle"}
              curveness={0}
              showHead={false}
              zIndex={-1}
              strokeWidth={2}
              path={"grid"}
              gridBreak="70%"
              color={theme.colors.bgTertiary}
            />
            <Xarrow
              start={ref1}
              end={"center"}
              startAnchor={"middle"}
              endAnchor={"middle"}
              curveness={0}
              showHead={false}
              zIndex={-1}
              strokeWidth={2}
              path={"grid"}
              gridBreak="70%"
              color={theme.colors.bgTertiary}
            />
            <Xarrow
              start={ref2}
              end={"center"}
              startAnchor={"middle"}
              endAnchor={"middle"}
              curveness={0}
              showHead={false}
              zIndex={-1}
              strokeWidth={2}
              path={"grid"}
              gridBreak="70%"
              color={theme.colors.bgTertiary}
            />
          </Xwrapper>
        </AvatarContainer>
      </RightContainer>
    </IntroContainer>
  );
}

export default Intro;
