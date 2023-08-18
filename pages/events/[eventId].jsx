import EventPage from "@/components/eventPage/EventPage";
import Navbar from "@/components/navbar/Navbar";
import prisma from "@/lib/prisma";

export default function Event() {
  return (
    <>
      <Navbar />
      <EventPage />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const { eventId } = ctx.params;
  console.log(eventId);

  return {
    props: {
      eventId
    }
  };
};

export async function getStaticPaths() {
  const eventSlugs = await prisma.event.findMany({
    select: {
      slug: true
    }
  });
  console.log("Loaded Slugs: ", eventSlugs);
  const paths = eventSlugs.map((event) => {
    return {
      params: {
        slug: event.slug
      }
    };
  });
  return {
    paths: paths,
    fallback: false // can also be true or 'blocking'
  };
}
