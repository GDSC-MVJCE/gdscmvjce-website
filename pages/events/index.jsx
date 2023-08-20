import Navbar from "@/components/navbar/Navbar";
import EventsPage from "@/components/eventsPage/EventsPage";
import Head from "next/head";
import Footer from "@/components/display/footer/Footer";

function Events() {
  return (
    <>
      <Head>
        <title>Events | GDSC MVJCE</title>
        <meta name="description" content="Explore our technical events" />
        <meta property="og:title" content="Events | GDSC MVJCE" />
        <meta
          property="og:description"
          content="Explore our technical events"
        />
        <meta property="og:image" content={"/images/gdsc_fallback.png"} />
      </Head>
      <Navbar />
      <EventsPage />
      <Footer />
    </>
  );
}

export default Events;
