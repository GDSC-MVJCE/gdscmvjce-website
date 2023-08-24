import Head from "next/head";
import EventsPage from "@/components/eventsPage/EventsPage";

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
      <EventsPage />
    </>
  );
}

export default Events;
