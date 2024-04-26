import { devices } from "@/constants/theme";
import Typography from "../typography/Typography";
import {
  Container,
  OfferCard,
  OfferInfo,
  OfferLogo,
  OffersContainer,
  Title
} from "./OfferSection.styled";
import BookSvg from "@icons/book1.svg";
import CubeSvg from "@icons/i3dcubescan.svg";
import MessageSvg from "@icons/messageprogramming.svg";
import PersonSvg from "@icons/profilecircle.svg";
import { useEffect, useRef, useState } from "react";
import Xarrow from "react-xarrows";
import { useTheme } from "styled-components";

function OfferSection() {
  const theme = useTheme();
  const Logo1ref = useRef();
  const Logo2ref = useRef();
  const Logo3ref = useRef();
  const Logo4ref = useRef();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(devices.md);
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
    <Container>
      <Title>
        <Typography variant="h1">What do we offer?</Typography>
      </Title>
      <OffersContainer>
        <OfferCard>
          <OfferLogo
            bgcolor={["#EA4335", "#FF6B6B"]}
            rgb="255, 107, 107"
            delay={0}
            ref={Logo1ref}
          >
            <BookSvg />
          </OfferLogo>
          <OfferInfo>
            <Typography variant="h3">Study Jams</Typography>
            <Typography variant="bodySmall">
              Join our study jams to dive deep into specific topics, collaborate
              with fellow learners, and expand your understanding through guided
              study sessions and interactive discussions.
            </Typography>
          </OfferInfo>
        </OfferCard>
        <OfferCard
          style={
            !isMobile ? { alignSelf: "flex-end", justifyContent: "right" } : {}
          }
        >
          <OfferLogo
            bgcolor={["#FBBC04", "#FFD54F"]}
            rgb="255, 213, 79"
            delay={1000}
            ref={Logo2ref}
          >
            <CubeSvg />
          </OfferLogo>
          <OfferInfo>
            <Typography variant="h3">Workshops</Typography>
            <Typography variant="bodySmall">
              Immerse yourself in hands-on learning experiences with our
              workshops, where you&apos;ll gain practical knowledge and skills
              in the latest technologies and industry trends.
            </Typography>
          </OfferInfo>
        </OfferCard>
        <OfferCard>
          <OfferLogo
            bgcolor={["#0F9D58", "#64D8CB"]}
            rgb="100, 216, 203"
            delay={1500}
            ref={Logo3ref}
          >
            <MessageSvg />
          </OfferLogo>
          <OfferInfo>
            <Typography variant="h3">Engaging Dev Community</Typography>
            <Typography variant="bodySmall">
              Become part of our dynamic and supportive developer community,
              where you can connect with like-minded individuals, collaborate on
              projects, and find inspiration through engaging discussions and
              events.
            </Typography>
          </OfferInfo>
        </OfferCard>
        <OfferCard
          style={
            !isMobile ? { alignSelf: "flex-end", justifyContent: "right" } : {}
          }
        >
          <OfferLogo
            bgcolor={["#4285F4", "#6FA1FF"]}
            rgb="111, 168, 255"
            delay={2000}
            ref={Logo4ref}
          >
            <PersonSvg />
          </OfferLogo>
          <OfferInfo>
            <Typography variant="h3">Scale your dev career</Typography>
            <Typography variant="bodySmall">
              Take your development career to new heights with our
              career-focused resources, mentorship programs, and industry
              connections, designed to help you navigate the path to success.
            </Typography>
          </OfferInfo>
        </OfferCard>
      </OffersContainer>
      <Xarrow
        startAnchor={"middle"}
        endAnchor={"middle"}
        start={Logo1ref}
        end={Logo2ref}
        lineColor={theme?.colors.bgTertiary}
        showHead={false}
        curveness={0}
        zIndex={-1}
      />
      <Xarrow
        startAnchor={"middle"}
        endAnchor={"middle"}
        start={Logo2ref}
        end={Logo3ref}
        lineColor={theme?.colors.bgTertiary}
        showHead={false}
        curveness={0}
        zIndex={-1}
      />
      <Xarrow
        startAnchor={"middle"}
        endAnchor={"middle"}
        start={Logo3ref}
        end={Logo4ref}
        lineColor={theme?.colors.bgTertiary}
        showHead={false}
        curveness={0}
        zIndex={-1}
      />
    </Container>
  );
}

export default OfferSection;
