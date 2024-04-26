import Head from "next/head";
import { useEffect, useState } from "react";

import BlogsSection from "@/components/blogSection/BlogSection";
import AboutSection from "@/components/display/aboutSection/AboutSection";
import EventsSection from "@/components/display/eventsSection/EventsSection";
import OfferSection from "@/components/display/offerSection/OfferSection";
import TeamIntro from "@/components/display/teamIntro/TeamIntro";
import GalleryCarousel from "@/components/galleryCarousel/GalleryCarousel";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import MeetTeam from "@/components/meetTeam/MeetTeam";
import { devices } from "@/constants/theme";

export default function Home() {
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const mediaQuerySm = window.matchMedia(devices.sm);
    const mediaQueryMd = window.matchMedia(devices.md);
    const mediaQueryLg = window.matchMedia(devices.lg);

    setIsSmall(mediaQuerySm.matches);
    setIsMedium(mediaQueryMd.matches);
    setIsLarge(mediaQueryLg.matches);

    const handleMediaQueryChangeSm = (event) => {
      setIsSmall(event.matches);
    };
    const handleMediaQueryChangeMd = (event) => {
      setIsMedium(event.matches);
    };
    const handleMediaQueryChangeLg = (event) => {
      setIsLarge(event.matches);
    };

    mediaQuerySm.addEventListener("change", handleMediaQueryChangeSm);
    mediaQueryMd.addEventListener("change", handleMediaQueryChangeMd);
    mediaQueryLg.addEventListener("change", handleMediaQueryChangeLg);

    return () => {
      mediaQuerySm.removeEventListener("change", handleMediaQueryChangeSm);
      mediaQueryMd.removeEventListener("change", handleMediaQueryChangeMd);
      mediaQueryLg.removeEventListener("change", handleMediaQueryChangeLg);
    };
  }, []);

  return (
    <>
      <Head>
        <title>GDSC MVJCE</title>
        <meta
          name="description"
          content="Join GDSC MVJCE, a hub for tech enthusiasts! Explore workshops, events, and projects. Dive into coding, AI, web development, and more."
        />
        <meta
          name="keywords"
          content="GDSC MVJCE, Google Developer Student Club, MVJ College of Engineering, tech workshops, coding events, AI projects, web development, tech enthusiasts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="GDSC MVJCE" />
        <meta
          property="og:description"
          content="Join GDSC MVJCE, a hub for tech enthusiasts! Explore workshops, events, and projects. Dive into coding, AI, web development, and more."
        />
        <meta property="og:image" content="/images/gdsc_fallback.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero isMobile={isLarge} />
        <AboutSection />
        <Intro isMobile={isSmall} />
        <OfferSection isMobile={isMedium} />
        <TeamIntro isMobile={isLarge} />
        <MeetTeam isMobile={isSmall} />
        <EventsSection isMobile={isLarge} />
        {/* <GalleryCarousel /> */}
        <BlogsSection isMobile={isLarge} />
      </main>
    </>
  );
}
