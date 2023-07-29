import BlogSection from "@/components/blogSection/BlogSection";
import EventsSection from "@/components/display/eventsSection/EventsSection";
import FaqSection from "@/components/display/faqSection/FaqSection";
import OfferSection from "@/components/display/offerSection/OfferSection";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
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
        <Navbar />
        <Hero />
        <OfferSection />
        <EventsSection />
        <FaqSection />
        <BlogSection />
      </main>
    </>
  );
}
