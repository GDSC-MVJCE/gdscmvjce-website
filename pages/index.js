import BlogsSection from "@/components/blogSection/BlogSection";
import AboutSection from "@/components/display/aboutSection/AboutSection";
import EventsSection from "@/components/display/eventsSection/EventsSection";
import OfferSection from "@/components/display/offerSection/OfferSection";
import TeamIntro from "@/components/display/teamIntro/TeamIntro";
import GalleryCarousel from "@/components/galleryCarousel/GalleryCarousel";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import MeetTeam from "@/components/meetTeam/MeetTeam";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GDSC MVJCE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <AboutSection />
        <Intro />
        {/* <OfferSection /> */}
        <TeamIntro />
        {/* <MeetTeam /> */}
        <EventsSection />
        {/* <GalleryCarousel /> */}
        <BlogsSection />
      </main>
    </>
  );
}
