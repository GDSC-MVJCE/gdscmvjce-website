import React, { useEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash.debounce";
import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  Sticky,
  Zoom
} from "react-scroll-motion";
import {
  HeroAvatarWrapper,
  HeroBackgroundContainer,
  HeroBackgroundTextSpan,
  HeroSectionContainer,
  HeroTextSpan,
  LogoContainer,
  MouseContainer,
  MouseScroll
} from "./Hero.styled.js";
import GDSCLogo from "@logos/gdsc-logo.svg";
import Xarrow, { Xwrapper, useXarrow } from "react-xarrows";
import Avatar from "../avatar/Avatar";
import { devices } from "@/constants/theme.js";

const MobileHero = () => {
  const heroTextElements = useMemo(
    () => [
      { text: "Web", id: "web", color: "#EA4335", x: 60, y: 12, delay: 0.1 },
      {
        text: "Tensorflow",
        id: "tensorflow",
        color: "#FBBC04",
        x: 13,
        y: 78,
        delay: 0.4
      },
      {
        text: "Kotlin",
        id: "android",
        color: "#0F9D58",
        x: 10,
        y: 13,
        delay: 1.2
      },
      {
        text: "Flutter",
        id: "flutter",
        color: "#4285F4",
        x: 60,
        y: 80,
        delay: 2.3
      }
    ],
    []
  );

  const heroAvatarElements = useMemo(
    () => [
      {
        url: "https://res.cloudinary.com/dp9ikb8xo/image/upload/v1692787374/website-assets/avatars/imaad_tnyadv.jpg",
        borderColor: "#EA4335",
        id: "a1",
        x: 25,
        y: 16,
        delay: 0.9
      },
      {
        url: "https://res.cloudinary.com/dp9ikb8xo/image/upload/v1692787309/website-assets/avatars/sohan_e6wzwq.jpg",
        borderColor: "#FBBC04",
        id: "a2",
        x: 63,
        y: 55,
        delay: 1.5
      },
      {
        url: "https://res.cloudinary.com/dp9ikb8xo/image/upload/v1692788392/website-assets/avatars/shivam_nglmyb.jpg",
        borderColor: "#0F9D58",
        id: "a3",
        x: 18,
        y: 65,
        delay: 0.3
      },
      {
        url: "https://res.cloudinary.com/dp9ikb8xo/image/upload/v1692788449/website-assets/avatars/sidh-gdsc-enhanced_gswoin.jpg",
        borderColor: "#4285F4",
        id: "a4",
        x: 67,
        y: 26,
        delay: 0.3
      }
    ],
    []
  );

  const [isTextHighlighted, setIsTextHighlighted] = useState(false);
  const [isAvatarHighlighted, setIsAvatarHighlighted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const updatedXArrows = useXarrow();
  const handleUpdateXArrows = debounce(updatedXArrows, 100);
  const refsById = useMemo(() => {
    const refs = {};
    heroTextElements.forEach((item) => {
      refs[item.id] = React.createRef(null);
    });
    heroAvatarElements.forEach((item) => {
      refs[item.id] = React.createRef(null);
    });
    return refs;
  }, [heroAvatarElements, heroTextElements]);

  useEffect(() => {
    if (refsById != null) {
      handleUpdateXArrows();
    }
  }, [refsById, handleUpdateXArrows]);

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
    <HeroSectionContainer>
      <Xwrapper>
        <HeroBackgroundContainer>
          <div className="mainText">
            <HeroTextSpan
              color="#EA4335"
              onMouseEnter={() => setIsTextHighlighted(true)}
              onMouseLeave={() => setIsTextHighlighted(false)}
            >
              Learn.
            </HeroTextSpan>
            <HeroTextSpan
              className="animated-2"
              id="connect"
              color="#4285F4"
              onMouseEnter={() => setIsAvatarHighlighted(true)}
              onMouseLeave={() => setIsAvatarHighlighted(false)}
            >
              Connect.
            </HeroTextSpan>
            <HeroTextSpan color="#0F9D58">Grow.</HeroTextSpan>
          </div>

          {heroTextElements.map((element, index) => (
            <HeroBackgroundTextSpan
              isHighlighted={isTextHighlighted}
              top={element.y}
              left={element.x}
              key={index}
              color={element.color}
              id={element.id}
              ref={refsById[element.id]}
              delay={element.delay}
            >
              {element.text}
            </HeroBackgroundTextSpan>
          ))}
          {heroAvatarElements.map((element, index) => (
            <HeroAvatarWrapper
              isHighlighted={isAvatarHighlighted}
              top={element.y}
              left={element.x}
              key={index}
              id={element.id}
              ref={refsById[element.id]}
              delay={element.delay}
            >
              <Avatar
                size="md"
                url={element.url}
                borderColor={element.borderColor}
                blur={true}
              />
            </HeroAvatarWrapper>
          ))}
          <Xarrow
            start="a1"
            end="android"
            showHead={true}
            showTail={true}
            startAnchor={"middle"}
            endAnchor={"bottom"}
            headShape={"circle"}
            tailShape={"circle"}
            tailSize={3}
            headSize={3}
            curveness={0}
            zIndex={-2}
            strokeWidth={2}
            headColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            tailColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            lineColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
          />
          <Xarrow
            start="web"
            end="a1"
            showHead={true}
            showTail={true}
            startAnchor={"bottom"}
            endAnchor={"middle"}
            headShape={"circle"}
            tailShape={"circle"}
            tailSize={3}
            headSize={3}
            curveness={0}
            zIndex={-2}
            strokeWidth={2}
            headColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            tailColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            lineColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
          />
          <Xarrow
            start="a1"
            end="a4"
            showHead={true}
            showTail={true}
            startAnchor={"middle"}
            endAnchor={"middle"}
            headShape={"circle"}
            tailShape={"circle"}
            tailSize={3}
            headSize={3}
            curveness={0}
            zIndex={-2}
            strokeWidth={2}
            headColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            tailColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            lineColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
          />
          <Xarrow
            start="a4"
            end="a2"
            showHead={true}
            showTail={true}
            startAnchor={"middle"}
            endAnchor={"middle"}
            headShape={"circle"}
            tailShape={"circle"}
            tailSize={3}
            headSize={3}
            curveness={0}
            zIndex={-2}
            strokeWidth={2}
            headColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            tailColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            lineColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
          />
          <Xarrow
            start="a2"
            end="a3"
            showHead={true}
            showTail={true}
            startAnchor={"middle"}
            endAnchor={"middle"}
            headShape={"circle"}
            tailShape={"circle"}
            tailSize={3}
            headSize={3}
            curveness={0}
            zIndex={-2}
            strokeWidth={2}
            headColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            tailColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            lineColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
          />

          <Xarrow
            start="a3"
            end="tensorflow"
            showHead={true}
            showTail={true}
            startAnchor={"middle"}
            endAnchor={"top"}
            headShape={"circle"}
            tailShape={"circle"}
            tailSize={3}
            headSize={3}
            curveness={0}
            zIndex={-2}
            strokeWidth={2}
            headColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            tailColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            lineColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
          />
          <Xarrow
            start="a3"
            end="flutter"
            showHead={true}
            showTail={true}
            startAnchor={"middle"}
            endAnchor={"left"}
            headShape={"circle"}
            tailShape={"circle"}
            tailSize={3}
            headSize={3}
            curveness={0}
            zIndex={-2}
            strokeWidth={2}
            headColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            tailColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
            lineColor={isTextHighlighted ? "#EA4335" : "#F1F1F1"}
          />
        </HeroBackgroundContainer>
      </Xwrapper>
    </HeroSectionContainer>
  );
};

export default MobileHero;
